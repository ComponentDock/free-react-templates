import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from './Header'
import { NAV_LINKS } from '../content'

class Observer {
  static last: Observer | null = null
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    Observer.last = this
  }
  observe() {}
  disconnect() {}
  unobserve() {}
  takeRecords() {
    return []
  }
  root = null
  rootMargin = ''
  thresholds = []
}

function addBands() {
  for (const link of NAV_LINKS) {
    const section = document.createElement('section')
    section.id = link.id
    document.body.append(section)
  }
}

afterEach(() => {
  Observer.last = null
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
  document.body.innerHTML = ''
})

describe('Header', () => {
  it('is a banner with eight nav links that all target a band', () => {
    addBands()
    render(<Header />)

    const banner = screen.getByRole('banner')
    const nav = within(banner).getByRole('navigation', { name: 'Main navigation' })
    const links = within(nav).getAllByRole('link')

    expect(links).toHaveLength(8)
    expect(links.map((link) => link.textContent)).toEqual([
      'Feed',
      'Circles',
      'People',
      'Privacy',
      'About',
      'Plans',
      'Blog',
      'Contact',
    ])
    for (const link of links) {
      const href = link.getAttribute('href') ?? ''
      expect(document.getElementById(href.slice(1))).not.toBeNull()
    }
    expect(within(banner).getByRole('link', { name: 'Create your circle' })).toHaveAttribute(
      'href',
      '#pricing',
    )
  })

  it('adds its shadow only once the page is past 50 px', () => {
    addBands()
    render(<Header />)
    const banner = screen.getByRole('banner')
    expect(banner).not.toHaveClass('shadow-lg')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 51 })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(banner).toHaveClass('shadow-lg')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 10 })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(banner).not.toHaveClass('shadow-lg')
  })

  it('opens and closes the mobile disclosure, including with Escape', () => {
    addBands()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getAllByRole('link')).toHaveLength(9)

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    })
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    })
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })

  it('closes the disclosure when a link inside it is followed', () => {
    addBands()
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Circles' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })

  it('closes the disclosure from its own call to action', () => {
    addBands()
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const cta = within(mobileNav).getByRole('link', { name: 'Create your circle' })
    expect(cta).toHaveAttribute('href', '#pricing')

    fireEvent.click(cta)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })

  it('toggles the disclosure shut with the same control', () => {
    addBands()
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })

  it('marks the band in view with aria-current', () => {
    addBands()
    vi.stubGlobal('IntersectionObserver', Observer)
    render(<Header />)

    act(() => {
      Observer.last?.callback(
        [
          {
            isIntersecting: true,
            intersectionRatio: 0.8,
            target: { id: 'circles' },
          } as unknown as IntersectionObserverEntry,
        ],
        Observer.last as unknown as IntersectionObserver,
      )
    })

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByRole('link', { name: 'Circles' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(nav).getByRole('link', { name: 'Feed' })).not.toHaveAttribute('aria-current')
  })
})
