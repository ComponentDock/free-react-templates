import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from './Header'
import { HERO, NAV_LINKS, PHONE_LABEL } from '../content'

type Entry = { isIntersecting: boolean; target: { id: string }; intersectionRatio: number }

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly callback: (entries: Entry[]) => void

  constructor(callback: (entries: Entry[]) => void) {
    this.callback = callback
    FakeObserver.instances.push(this)
  }

  observe() {}
  disconnect() {}
}

afterEach(() => {
  vi.unstubAllGlobals()
  FakeObserver.instances = []
})

describe('Header', () => {
  it('renders the wordmark, the seven links, the pills and the CTA', () => {
    render(<Header lifted={false} />)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getAllByRole('link').map((link) => link.textContent)).toEqual(
      NAV_LINKS.map((link) => link.label),
    )
    expect(within(nav).getByRole('link', { name: 'Boilers' })).toHaveAttribute('href', '#services')
    expect(within(nav).getByRole('link', { name: 'Cover plans' })).toHaveAttribute(
      'href',
      '#plans',
    )
    expect(screen.getByRole('link', { name: 'Emberly — back to the top' })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(screen.getByRole('link', { name: PHONE_LABEL })).toHaveAttribute(
      'href',
      'tel:08000000000',
    )
    expect(screen.getByRole('link', { name: 'Leeds' })).toHaveAttribute('href', '#areas')
    expect(screen.getByRole('link', { name: HERO.primaryCta })).toHaveAttribute('href', '#plans')
  })

  it('gains its shadow only once the page is lifted', () => {
    const { container, rerender } = render(<Header lifted={false} />)
    expect(container.querySelector('[data-header]')).not.toHaveClass('shadow-lg')

    rerender(<Header lifted />)
    expect(container.querySelector('[data-header]')).toHaveClass('shadow-lg')
  })

  it('opens and closes the disclosure below xl with an aria-expanded trigger', async () => {
    const user = userEvent.setup()
    render(<Header lifted={false} />)

    const trigger = screen.getByRole('button', { name: 'Open menu' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()

    await user.click(trigger)
    const panel = document.querySelector('[data-mobile-menu]') as HTMLElement
    expect(panel).not.toBeNull()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(within(panel).getAllByRole('link')).toHaveLength(NAV_LINKS.length + 3)

    await user.click(within(panel).getByRole('link', { name: 'Areas' }))
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopened = document.querySelector('[data-mobile-menu]') as HTMLElement
    await user.click(within(reopened).getByRole('link', { name: HERO.primaryCta }))
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()
  })

  it('marks the band in view and only the first label that points at it', () => {
    vi.stubGlobal('IntersectionObserver', FakeObserver)
    render(<Header lifted={false} />)

    act(() => {
      FakeObserver.instances.at(-1)!.callback([
        { isIntersecting: true, target: { id: 'process' }, intersectionRatio: 0.8 },
      ])
    })

    expect(screen.getByRole('link', { name: 'Repairs' })).toHaveAttribute(
      'aria-current',
      'location',
    )
    expect(screen.getByRole('link', { name: 'Repairs' })).toHaveClass('font-semibold')
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')
    expect(screen.getByRole('link', { name: 'About' })).toHaveClass('text-ink-600')
  })
})
