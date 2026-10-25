import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from '../components/Header'
import { NAV_LINKS } from '../data'
import { installIO } from './helpers'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Header', () => {
  it('renders the six labels, both pills and the CTA', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getAllByRole('link')).toHaveLength(NAV_LINKS.length)
    expect(within(nav).getByRole('link', { name: 'Response tiers' })).toHaveAttribute(
      'href',
      '#response',
    )
    expect(screen.getByRole('link', { name: '(555) 100-1000' })).toHaveAttribute(
      'href',
      'tel:5551001000',
    )
    expect(screen.getByRole('link', { name: 'Request a site survey' })).toHaveAttribute(
      'href',
      '#quote',
    )
    expect(screen.getByTestId('site-header')).toHaveClass('sticky', 'backdrop-blur-lg')
  })

  it('keeps the nav until xl and the location pill until 2xl', () => {
    render(<Header />)

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toHaveClass(
      'hidden',
      'xl:flex',
    )
    expect(screen.getByRole('link', { name: 'Fort Worth, TX' })).toHaveClass('2xl:inline-flex')
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveClass('xl:hidden')
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
    expect(within(mobile).getAllByRole('link')).toHaveLength(NAV_LINKS.length + 3)

    await user.click(within(mobile).getByRole('link', { name: 'Agreements' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the disclosure from its own CTA and from its location pill', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(
      within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', {
        name: 'Request a site survey',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(
      within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', {
        name: 'Fort Worth, TX',
      }),
    )
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
        {NAV_LINKS.map((link) => (
          <section key={link.label} id={link.spy ?? ''} />
        ))}
      </>,
    )

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(observers[0]!.elements).toHaveLength(NAV_LINKS.length)

    act(() => {
      observers[0]!.fire(false, document.getElementById('response') as Element)
    })
    expect(within(nav).getByRole('link', { name: 'Response tiers' })).not.toHaveClass('nav-active')

    act(() => {
      observers[0]!.fire(true, document.getElementById('response') as Element)
    })
    expect(within(nav).getByRole('link', { name: 'Response tiers' })).toHaveClass('nav-active')
    expect(within(nav).getByRole('link', { name: 'Response tiers' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(within(nav).getByRole('link', { name: 'Service areas' })).not.toHaveClass('nav-active')
  })
})
