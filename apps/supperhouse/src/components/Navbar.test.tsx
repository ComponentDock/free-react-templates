import { describe, expect, it } from 'vitest'
import { render, screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo text Supperhouse', () => {
    render(<Navbar />)
    expect(screen.getByText('Supperhouse')).toBeInTheDocument()
  })

  it('renders the logo as a link to #home', () => {
    render(<Navbar />)
    const logo = screen.getByText('Supperhouse')
    expect(logo).toHaveAttribute('href', '#home')
  })

  it('renders all desktop nav links', () => {
    render(<Navbar />)
    const labels = ['Home', 'Dish', 'Chefs', 'Blog', 'Contact']
    for (const label of labels) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('desktop nav has aria-label Primary', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
  })

  it('hamburger button exists with aria-label Open menu', () => {
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: 'Open menu' })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles mobile menu open on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const btn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(btn)

    expect(btn).toHaveAttribute('aria-expanded', 'true')
    expect(btn).toHaveAttribute('aria-label', 'Close menu')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
  })

  it('toggles mobile menu closed on second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const btn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(btn)
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('mobile nav links are present when menu is open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const labels = ['Home', 'Dish', 'Chefs', 'Blog', 'Contact']
    for (const label of labels) {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('clicking a mobile nav link closes the menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const homeLink = within(mobileNav).getByRole('link', { name: 'Home' })

    // Attach preventDefault to avoid jsdom hash navigation race
    homeLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(homeLink)

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('scroll past 50px adds dark background to header', async () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')

    // Initially transparent
    expect(header.className).toContain('bg-transparent')

    // Simulate scroll past 50
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))

    await waitFor(() => {
      expect(header.className).toContain('bg-ink/90')
    })

    // Cleanup
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  it('scroll below 50px keeps transparent background', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')

    Object.defineProperty(window, 'scrollY', { value: 30, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))

    // bg-transparent should remain (scrollY not > 50)
    expect(header.className).toContain('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })
})
