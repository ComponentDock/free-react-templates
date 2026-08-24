import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo text "Spruce"', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Spruce' })).toBeInTheDocument()
  })

  it('renders all 6 desktop nav links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']
    for (const label of links) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the "Free Quote" button visible on desktop', () => {
    render(<Navbar />)
    const quoteLinks = screen.getAllByRole('link', { name: 'Free Quote' })
    expect(quoteLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('mobile toggle button starts with aria-expanded=false', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('mobile toggle opens and closes the menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileNav = screen.getAllByRole('navigation')
    expect(mobileNav.length).toBeGreaterThanOrEqual(1)

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('clicking a mobile nav link closes the menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Use getAllByRole since "Home" appears in both desktop and mobile nav
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    // Last one is the mobile version
    await user.click(homeLinks[homeLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('clicking mobile CTA closes the menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const ctaLinks = screen.getAllByRole('link', { name: 'Free Quote' })
    await user.click(ctaLinks[ctaLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('includes sticky and transition-shadow classes', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!
    expect(header.className).toContain('sticky')
    expect(header.className).toContain('transition-shadow')
  })

  it('has shadow-md when scrolled on mount', () => {
    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true, writable: true })
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!
    expect(header.className).toContain('shadow-md')
  })
})
