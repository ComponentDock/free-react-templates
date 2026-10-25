import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from './Header'
import { NAV_LINKS, PHONE_LABEL } from '../content'

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
  it('renders the wordmark, the six links, the pills and the CTA', () => {
    render(<Header lifted={false} />)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getAllByRole('link').map((link) => link.textContent)).toEqual(
      NAV_LINKS.map((link) => link.label),
    )
    expect(within(nav).getByRole('link', { name: 'Selling a house' })).toHaveAttribute(
      'href',
      '#timeline',
    )
    expect(screen.getByRole('link', { name: 'Percline — back to the top' })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(screen.getAllByRole('link', { name: PHONE_LABEL })[0]).toHaveAttribute(
      'href',
      'tel:+15551101100',
    )
    expect(screen.getByRole('link', { name: 'Wichita, KS' })).toHaveAttribute('href', '#areas')
    expect(screen.getAllByRole('link', { name: 'Book an inspection' }).length).toBeGreaterThan(0)
  })

  it('gains its shadow only once the page is lifted', () => {
    const { container, rerender } = render(<Header lifted={false} />)
    expect(container.querySelector('[data-header]')).not.toHaveClass('shadow-lg')

    rerender(<Header lifted />)
    expect(container.querySelector('[data-header]')).toHaveClass('shadow-lg')
  })

  it('opens and closes the disclosure with an aria-expanded trigger', async () => {
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
    expect(within(panel).getAllByRole('link').length).toBe(NAV_LINKS.length + 3)

    await user.click(within(panel).getByRole('link', { name: 'Services' }))
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopened = document.querySelector('[data-mobile-menu]') as HTMLElement
    await user.click(within(reopened).getByRole('link', { name: 'Book an inspection' }))
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()
  })

  it('marks the band in view and only the first link that points at it', () => {
    vi.stubGlobal('IntersectionObserver', FakeObserver)
    render(<Header lifted={false} />)

    act(() => {
      FakeObserver.instances[0]!.callback([
        { isIntersecting: true, target: { id: 'why-us' }, intersectionRatio: 0.8 },
      ])
    })

    expect(screen.getByRole('link', { name: 'How septic works' })).toHaveAttribute(
      'aria-current',
      'location',
    )
    expect(screen.getByRole('link', { name: 'How septic works' })).toHaveClass('nav-active')
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')
    expect(screen.getByRole('link', { name: 'About' })).toHaveClass('text-ink-600')
  })
})
