import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from '../components/Header'
import { NAV_LINKS } from '../data'
import { installIO } from '../test/helpers'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Header', () => {
  it('renders the nine labels and the solid membership control', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getAllByRole('link')).toHaveLength(NAV_LINKS.length)
    expect(within(nav).getByRole('link', { name: 'Channels' })).toHaveAttribute('href', '#channels')
    expect(screen.getByRole('link', { name: 'Join the Community' })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByTestId('site-header')).toHaveClass('sticky', 'backdrop-blur-lg')
  })

  it('gains its shadow only past 50 px', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    render(<Header />)
    const header = screen.getByTestId('site-header')
    expect(header).toHaveClass('shadow-none')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 120 })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).toHaveClass('shadow-lg')
  })

  it('opens and closes the mobile disclosure with a glyph swap', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(toggle)

    const close = screen.getByRole('button', { name: 'Close menu' })
    expect(close).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobile).getAllByRole('link')).toHaveLength(NAV_LINKS.length + 1)

    await user.click(within(mobile).getByRole('link', { name: 'Events' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the disclosure from its own membership control', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobile).getByRole('link', { name: 'Join the Community' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('observes nothing when the bands are not on the page', () => {
    const observers = installIO()
    render(<Header />)

    expect(observers[0]!.elements).toHaveLength(0)
  })

  it('marks only the band in view as current', () => {
    const observers = installIO()
    render(
      <>
        <Header />
        <section id="channels" />
        <section id="discussions" />
        <section id="members" />
        <section id="events" />
      </>,
    )

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(observers[0]!.elements).toHaveLength(4)

    act(() => {
      observers[0]!.fire(false, document.getElementById('channels') as Element)
    })
    expect(within(nav).getByRole('link', { name: 'Channels' })).not.toHaveClass('nav-active')

    act(() => {
      observers[0]!.fire(true, document.getElementById('channels') as Element)
    })
    expect(within(nav).getByRole('link', { name: 'Channels' })).toHaveClass('nav-active')
    expect(within(nav).getByRole('link', { name: 'Channels' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(within(nav).getByRole('link', { name: 'Events' })).not.toHaveClass('nav-active')
  })
})
