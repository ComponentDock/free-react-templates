import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Foodnest')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toBeInTheDocument()

    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks.length).toBeGreaterThanOrEqual(1)
    expect(homeLinks[0]).toHaveAttribute('href', '#home')

    const recipesLinks = screen.getAllByRole('link', { name: 'Recipes' })
    expect(recipesLinks.length).toBeGreaterThanOrEqual(1)
    expect(recipesLinks[0]).toHaveAttribute('href', '#recipes')

    const servicesLinks = screen.getAllByRole('link', { name: 'Services' })
    expect(servicesLinks.length).toBeGreaterThanOrEqual(1)

    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    expect(aboutLinks.length).toBeGreaterThanOrEqual(1)

    const newsLinks = screen.getAllByRole('link', { name: 'News' })
    expect(newsLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Contact Us CTA', () => {
    render(<Navbar />)
    const contactLinks = screen.getAllByRole('link', { name: 'Contact Us' })
    expect(contactLinks.length).toBeGreaterThanOrEqual(1)
    expect(contactLinks[0]).toHaveAttribute('href', '#contact')
  })

  it('renders hamburger toggle for mobile', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles mobile menu on click', async () => {
    const { user } = await renderWithUser()
    const toggle = screen.getByRole('button', { name: /open menu/i })

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i })
    expect(mobileNav).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const { user } = await renderWithUser()
    const toggle = screen.getByRole('button', { name: /open menu/i })

    // Open mobile menu
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Click a mobile nav link (last Home link is in mobile nav)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[homeLinks.length - 1]!)

    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Contact Us is clicked', async () => {
    const { user } = await renderWithUser()
    const toggle = screen.getByRole('button', { name: /open menu/i })

    // Open mobile menu
    await user.click(toggle)

    // Click mobile Contact Us (last one)
    const contactLinks = screen.getAllByRole('link', { name: 'Contact Us' })
    await user.click(contactLinks[contactLinks.length - 1]!)

    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})

async function renderWithUser() {
  const userEvent = await import('@testing-library/user-event')
  const user = userEvent.default.setup()
  render(<Navbar />)
  return { user }
}
