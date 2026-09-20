import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo text', () => {
    render(<Header />)
    expect(screen.getByText('Fotura')).toBeInTheDocument()
  })

  it('renders the contact email link', () => {
    render(<Header />)
    expect(screen.getByText('HELLO@FOTURA.COM')).toHaveAttribute('href', 'mailto:hello@fotura.com')
  })

  it('renders navigation items', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '#portfolio')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: 'Regular page' })).toHaveAttribute('href', '#regular')
  })

  it('shows Portfolio dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const portfolioLink = screen.getByRole('link', { name: 'Portfolio' })
    await user.hover(portfolioLink.closest('li')!)
    expect(screen.getByRole('link', { name: 'Portfolio 1' })).toHaveAttribute(
      'href',
      '#portfolio-1',
    )
    expect(screen.getByRole('link', { name: 'Portfolio 2' })).toHaveAttribute(
      'href',
      '#portfolio-2',
    )
  })

  it('hides Portfolio dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const portfolioLi = screen.getByRole('link', { name: 'Portfolio' }).closest('li')!
    await user.hover(portfolioLi)
    expect(screen.getByRole('link', { name: 'Portfolio 1' })).toBeInTheDocument()
    await user.unhover(portfolioLi)
    expect(screen.queryByRole('link', { name: 'Portfolio 1' })).not.toBeInTheDocument()
  })

  it('shows Blog dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const blogLink = screen.getByRole('link', { name: 'Blog' })
    await user.hover(blogLink.closest('li')!)
    expect(screen.getByRole('link', { name: 'Blog Page' })).toHaveAttribute('href', '#blog-page')
    expect(screen.getByRole('link', { name: 'Blog Detail' })).toHaveAttribute(
      'href',
      '#blog-detail',
    )
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const hamburger = screen.getByRole('button', { name: 'Toggle navigation menu' })
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
    await user.click(hamburger)
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const hamburger = screen.getByRole('button', { name: 'Toggle navigation menu' })
    await user.click(hamburger)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const homeLink = mobileNav.querySelector('a[href="#home"]') as HTMLAnchorElement
    await user.click(homeLink)
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows sub-dropdown items for Portfolio in mobile nav', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const hamburger = screen.getByRole('button', { name: 'Toggle navigation menu' })
    await user.click(hamburger)
    // Mobile nav renders all sub-items inline (always visible)
    expect(screen.getByRole('link', { name: 'Portfolio 1' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Portfolio 2' })).toBeInTheDocument()
  })

  it('shows sub-dropdown items for Blog in mobile nav', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const hamburger = screen.getByRole('button', { name: 'Toggle navigation menu' })
    await user.click(hamburger)
    expect(screen.getByRole('link', { name: 'Blog Page' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog Detail' })).toBeInTheDocument()
  })

  it('closes mobile menu when a sub-dropdown link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const hamburger = screen.getByRole('button', { name: 'Toggle navigation menu' })
    await user.click(hamburger)
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    const portfolio1Link = screen.getByRole('link', { name: 'Portfolio 1' }) as HTMLAnchorElement
    await user.click(portfolio1Link)
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
  })

  it('has proper aria labels', () => {
    render(<Header />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })
})
