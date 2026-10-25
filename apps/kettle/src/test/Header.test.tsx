import { act, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from '../components/Header'
import { NAV_LINKS, SPY_IDS } from '../data'
import { installIO } from './helpers'

const BAND_IDS = [...SPY_IDS]

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
  it('renders the six labels in the reference order from xl', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const labels = Array.from(nav.querySelectorAll('a')).map((item) => item.textContent)
    expect(labels).toEqual(NAV_LINKS.map((link) => link.label))
    expect(nav).toHaveClass('hidden', 'xl:flex')
  })

  it('points every label at a band that exists and carries the two pills and the CTA', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    NAV_LINKS.forEach((link) => {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.target,
      )
    })

    expect(screen.getByRole('link', { name: 'Kettle home' })).toHaveAttribute('href', '#top')
    expect(screen.getByRole('link', { name: /Richmond, VA/ })).toHaveAttribute('href', '#areas')
    expect(screen.getByRole('link', { name: /555\) 090-0900/ })).toHaveAttribute(
      'href',
      'tel:5550900900',
    )
    const sizeLinks = screen.getAllByRole('link', { name: 'Size mine' })
    expect(sizeLinks).toHaveLength(2)
    sizeLinks.forEach((link) => expect(link).toHaveAttribute('href', '#size'))
    expect(screen.getByTestId('site-header')).toHaveClass('bg-white/90', 'backdrop-blur-lg')
  })

  it('gains a shadow past 50 px only', () => {
    render(<Header />)
    const header = screen.getByTestId('site-header')

    expect(header).toHaveClass('shadow-none')
    setScroll(51)
    expect(header).toHaveClass('shadow-lg')
    setScroll(10)
    expect(header).toHaveClass('shadow-none')
  })

  it('opens the disclosure with the same links, pills and CTA, and closes on a link', async () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()

    await userEvent.click(toggle)

    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(within(mobile).getAllByRole('link')).toHaveLength(NAV_LINKS.length + 3)

    await userEvent.click(within(mobile).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })

  it('closes the disclosure from the location pill and the CTA too', async () => {
    render(<Header />)

    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    let mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await userEvent.click(within(mobile).getByRole('link', { name: /Richmond, VA/ }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()

    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const sizeLinks = within(mobile).getAllByRole('link', { name: 'Size mine' })
    await userEvent.click(sizeLinks[1] as HTMLElement)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })

  it('closes the disclosure when the number is dialled from it', async () => {
    render(<Header />)
    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await userEvent.click(within(mobile).getByRole('link', { name: /555\) 090-0900/ }))

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })

  it('marks exactly the band in view as current', () => {
    const observers = installIO()
    mountBands()
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav.querySelector('[aria-current="true"]')).toBeNull()

    act(() => {
      observers[0]!.fire(true, document.getElementById('options')!)
    })

    expect(within(nav).getByRole('link', { name: 'Tank vs tankless' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(nav.querySelectorAll('[aria-current="true"]')).toHaveLength(1)

    act(() => {
      observers[0]!.fire(false, document.getElementById('options')!)
    })

    expect(within(nav).getByRole('link', { name: 'Tank vs tankless' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('skips bands that are not on the page', () => {
    const observers = installIO()
    render(<Header />)

    expect(observers[0]!.elements).toHaveLength(0)
    expect(screen.getByTestId('site-header')).toBeInTheDocument()
  })

  it('renders without a spy when the browser has no observer', () => {
    render(<Header />)

    act(() => {
      fireEvent.scroll(window)
    })

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })
})
