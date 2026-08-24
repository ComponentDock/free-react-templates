import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />)
    expect(screen.getByText(/Voyage/)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Home/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About Us/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog/ })).toBeInTheDocument()
    const contactLinks = screen.getAllByRole('link', { name: 'Contact Us' })
    expect(contactLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()

    await user.click(menuButton)
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()

    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    const homeLink = mobileNav.querySelector('a[href="#home"]')
    expect(homeLink).toBeInTheDocument()
    await user.click(homeLink!)

    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when Contact Us CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })

    // The mobile Contact Us CTA is a ButtonLink — click it
    const ctaButtons = mobileNav.querySelectorAll('a[href="#contact"]')
    // Last one is the CTA (first is the nav link)
    const ctaButton = ctaButtons[ctaButtons.length - 1]
    expect(ctaButton).toBeInTheDocument()
    await user.click(ctaButton!)

    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('applies scrolled styles when page is scrolled', () => {
    render(<Navbar />)

    // Initially not scrolled — transparent background
    const header = document.querySelector('header')!
    expect(header.className).toContain('bg-transparent')

    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    fireEvent.scroll(window)

    // Should now have scrolled styles
    expect(header.className).toContain('bg-white/95')
    expect(header.className).toContain('shadow-sm')
  })

  it('has correct navigation link hrefs', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: /Home/ })
    expect(homeLink).toHaveAttribute('href', '#home')

    const aboutLink = screen.getByRole('link', { name: /About Us/ })
    expect(aboutLink).toHaveAttribute('href', '#about')
  })
})
