import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { navLinks } from '../data'

describe('Header', () => {
  it('renders the brand with its directory tagline', () => {
    render(<Header />)
    const brand = screen.getByRole('link', { name: /HOODLY/ })
    expect(brand).toBeInTheDocument()
    expect(brand).toHaveTextContent('HOODLY')
    expect(brand).toHaveTextContent('LOCAL DIRECTORY')
  })

  it('renders every section link plus Register/Login and Add Listing', () => {
    render(<Header />)
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByText(/Register\//)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Add Listing' })).toHaveAttribute('href', '#trending')
  })

  it('opens and closes the mobile menu via the hamburger switch', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    await user.click(screen.getAllByRole('link', { name: 'Add Listing' }).at(-1)!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const explore = within(mobileNav).getByRole('link', { name: 'Explore' })
    // Neutralize jsdom hash-navigation so the React onClick still fires.
    explore.addEventListener('click', (event) => event.preventDefault(), { once: true })

    await user.click(explore)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
