import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { LICENCE, NAV_LINKS } from '../content'
import { Header } from './Header'
import { LicenceBar } from './LicenceBar'

type Entry = { isIntersecting: boolean; intersectionRatio: number; target: { id: string } }

const originalObserver = globalThis.IntersectionObserver

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly observed: Element[] = []
  constructor(readonly callback: (entries: Entry[]) => void) {
    FakeObserver.instances.push(this)
  }
  observe(node: Element) {
    this.observed.push(node)
  }
  disconnect() {}
}

beforeEach(() => {
  window.localStorage.clear()
  window.localStorage.setItem('theme', 'light')
})

describe('LicenceBar', () => {
  it('carries the four statements and the score above the header', () => {
    render(<LicenceBar />)
    expect(screen.getByText(LICENCE.label)).toBeInTheDocument()
    expect(screen.getByText(LICENCE.number)).toBeInTheDocument()
    expect(screen.getByText(LICENCE.statement)).toBeInTheDocument()
    expect(screen.getByText(LICENCE.serving)).toBeInTheDocument()
    expect(screen.getByText(LICENCE.score)).toBeInTheDocument()
    expect(screen.getByText(LICENCE.reviews)).toBeInTheDocument()
  })

  it('is a 36 px ink strip with one amber star', () => {
    const { container } = render(<LicenceBar />)
    const strip = container.querySelector('[data-licence-bar]') as HTMLElement
    expect(strip.className).toContain('h-9')
    expect(strip.className).toContain('bg-ink-800')
    expect(container.querySelectorAll('svg')).toHaveLength(1)
  })
})

describe('Header', () => {
  it('shows the wordmark, six labels, the phone pill, the toggle and the CTA', () => {
    render(<Header lifted={false} />)
    expect(screen.getByText('Airshed')).toBeInTheDocument()
    expect(screen.getByText('INDOOR AIR')).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav.querySelectorAll('a')).toHaveLength(6)
    NAV_LINKS.forEach((link) => {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    })
    expect(screen.getByRole('link', { name: 'Book an air assessment' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /theme/ })).toBeInTheDocument()
  })

  it('gains a shadow past 50 px of scroll', () => {
    const { container, rerender } = render(<Header lifted={false} />)
    const header = container.querySelector('header') as HTMLElement
    expect(header.className).not.toContain('shadow-lg')
    rerender(<Header lifted />)
    expect((container.querySelector('header') as HTMLElement).className).toContain('shadow-lg')
  })

  it('opens and closes the mobile panel with a real expanded state', () => {
    render(<Header lifted={false} />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    const close = screen.getByRole('button', { name: 'Close menu' })
    expect(close).toHaveAttribute('aria-expanded', 'true')
    const panel = document.querySelector('[data-mobile-menu]') as HTMLElement
    expect(panel).not.toBeNull()
    NAV_LINKS.forEach((link) => {
      expect(panel.textContent).toContain(link.label)
    })
    expect(panel.textContent).toContain('(555) 140-1400')

    fireEvent.click(within(panel).getByRole('link', { name: 'Services' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile panel from its own call to action', () => {
    render(<Header lifted={false} />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = document.querySelector('[data-mobile-menu]') as HTMLElement
    fireEvent.click(within(panel).getByRole('link', { name: 'Book an air assessment' }))
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()
  })

  it('closes on Escape and returns focus to the burger', () => {
    render(<Header lifted={false} />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.keyDown(document, { key: 'Tab' })
    expect(document.querySelector('[data-mobile-menu]')).not.toBeNull()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Open menu' }))
  })

  it('marks the band in view as the current nav label', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    render(
      <>
        <div id="services" />
        <Header lifted={false} />
      </>,
    )
    const observer = FakeObserver.instances[0]!
    expect(observer.observed).toHaveLength(1)

    act(() => {
      observer.callback([{ isIntersecting: true, intersectionRatio: 0.6, target: { id: 'services' } }])
    })

    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('aria-current', 'true')
    globalThis.IntersectionObserver = originalObserver
  })

  it('toggles the theme from the header', () => {
    render(<Header lifted={false} />)
    const toggle = screen.getByRole('button', { name: /theme/ })
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
    expect(window.localStorage.getItem('theme')).toBe('dark')
  })
})
