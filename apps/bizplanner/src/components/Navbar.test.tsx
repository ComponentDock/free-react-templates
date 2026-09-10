import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and all navigation links', () => {
    render(<Navbar />)

    const logo = screen.getByText(/Biz/)
    expect(logo).toBeInTheDocument()
    expect(screen.getByText('Planner')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toBeInTheDocument()

    const links = [
      'HOME',
      'ABOUT',
      'SERVICES',
      'PORTFOLIO',
      'TEAM',
      'SKILLS',
      'CLIENTS',
      'PRICING',
      'BLOG',
      'CONTACT',
    ]
    for (const label of links) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('each nav link has the correct href', () => {
    render(<Navbar />)

    const expected = [
      { label: 'HOME', href: '#home' },
      { label: 'ABOUT', href: '#about-us' },
      { label: 'SERVICES', href: '#service-section' },
      { label: 'PORTFOLIO', href: '#project-section' },
      { label: 'TEAM', href: '#team-section' },
      { label: 'SKILLS', href: '#skill-section' },
      { label: 'CLIENTS', href: '#our-client' },
      { label: 'PRICING', href: '#pricing-section' },
      { label: 'BLOG', href: '#blog-section' },
      { label: 'CONTACT', href: '#contact-section' },
    ]

    for (const { label, href } of expected) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveAttribute('href', href)
    }
  })

  it('has a sticky header element', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(banner).toHaveClass('sticky')
  })

  it('hamburger button is visible on mobile (always in DOM, hidden on desktop)', () => {
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    expect(hamburger).toBeInTheDocument()
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles mobile menu open and closed on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /open menu/i })

    // Mobile nav not visible initially
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    // Open menu
    await user.click(hamburger)
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Close menu
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open menu
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    // Click a mobile nav link
    const aboutLinks = screen.getAllByText('ABOUT')
    await user.click(aboutLinks[1]!)

    // Menu should close
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(<Navbar className="my-custom-class" />)
    const banner = screen.getByRole('banner')
    expect(banner).toHaveClass('my-custom-class')
  })
})
