import { act, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from '../components/Header'
import { NAV_LINKS } from '../data'
import { installIO } from './helpers'

const BAND_IDS = ['out-of-hours', 'species', 'health-plans', 'fees']

/** The spy only observes elements that exist, exactly like the real header. */
function mountBands() {
  BAND_IDS.forEach((id) => {
    const section = document.createElement('section')
    section.id = id
    document.body.appendChild(section)
  })
}

afterEach(() => {
  vi.unstubAllGlobals()
  BAND_IDS.forEach((id) => document.getElementById(id)?.remove())
})

function setScroll(scrollY: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('Header', () => {
  it('renders the eight labels in the reference order from lg', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const labels = Array.from(nav.querySelectorAll('a, span')).map((item) => item.textContent)
    expect(labels).toEqual([
      'Out of hours',
      'Animals we see',
      'Health plans',
      'Fees',
      'About',
      'Fee guide',
      'Blog',
      'Contact',
    ])
    expect(nav).toHaveClass('hidden', 'lg:flex')
  })

  it('points the four band labels at bands and leaves About and Blog as disabled text', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByRole('link', { name: 'Out of hours' })).toHaveAttribute(
      'href',
      '#out-of-hours',
    )
    expect(within(nav).getByRole('link', { name: 'Animals we see' })).toHaveAttribute(
      'href',
      '#species',
    )
    expect(within(nav).getByRole('link', { name: 'Fee guide' })).toHaveAttribute('href', '#fees')
    expect(within(nav).queryByRole('link', { name: 'About' })).toBeNull()
    expect(within(nav).getByText('About')).toHaveAttribute('aria-disabled', 'true')
  })

  it('carries the wordmark home and the registration CTA', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Smallpaw home' })).toHaveAttribute('href', '#top')
    expect(screen.getByRole('link', { name: 'Register your pet' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByTestId('site-header')).toHaveClass('bg-white/80', 'backdrop-blur-lg')
  })

  it('gains a shadow past 50 px only', () => {
    render(<Header />)
    const header = screen.getByTestId('site-header')

    setScroll(30)
    expect(header).toHaveClass('shadow-none')

    setScroll(120)
    expect(header).toHaveClass('shadow-lg')
  })

  it('opens and closes the mobile disclosure with the eight rows and a CTA', async () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()

    await userEvent.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobile.querySelectorAll('a')).toHaveLength(7)
    expect(within(mobile).getAllByText('About').length).toBe(1)
    expect(within(mobile).getByRole('link', { name: 'Register your pet' })).toHaveAttribute(
      'href',
      '#contact',
    )

    await userEvent.click(within(mobile).getByRole('link', { name: 'Health plans' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })

  it('closes the disclosure from the CTA as well', async () => {
    render(<Header />)

    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await userEvent.click(within(mobile).getByRole('link', { name: 'Register your pet' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })

  it('marks the band the spy is inside as current', () => {
    mountBands()
    const observers = installIO()
    render(<Header />)

    const target = document.createElement('div')
    target.id = 'fees'
    act(() => {
      observers[0]!.fire(true, target)
    })

    expect(screen.getByRole('link', { name: 'Fees' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'Fees' })).toHaveClass('nav-active')
    expect(screen.getByRole('link', { name: 'Contact' })).not.toHaveAttribute('aria-current')
  })

  it('uses the four band ids as spy targets and skips the ones with no element', () => {
    mountBands()
    const observers = installIO()
    render(<Header />)

    expect(observers[0]!.elements.map((element) => element.id)).toEqual(BAND_IDS)
  })

  it('skips a band that is not on the page', () => {
    document.body.appendChild(Object.assign(document.createElement('section'), { id: 'fees' }))
    const observers = installIO()
    render(<Header />)

    expect(observers[0]!.elements.map((element) => element.id)).toEqual(['fees'])
  })

  it('tolerates an entry that is not intersecting', () => {
    mountBands()
    const observers = installIO()
    render(<Header />)

    act(() => {
      fireEvent.scroll(window)
      observers[0]!.fire(false, document.createElement('div'))
    })

    expect(screen.getByRole('link', { name: 'Fees' })).not.toHaveAttribute('aria-current')
  })

  it('keeps every label mapped to a nav entry', () => {
    expect(NAV_LINKS).toHaveLength(8)
    expect(NAV_LINKS.filter((link) => link.spy !== null)).toHaveLength(4)
  })
})
