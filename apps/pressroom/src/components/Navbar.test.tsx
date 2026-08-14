import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders all desktop nav links', () => {
    render(<Navbar />)
    // Desktop list is hidden below lg breakpoint; hidden:true includes it.
    const links = screen.getAllByRole('link', { hidden: true })
    for (const link of NAV_LINKS) {
      expect(links.some((el) => el.textContent === link.label)).toBe(true)
    }
  })

  it('renders the search toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('opens and closes the search modal', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const searchButton = screen.getByRole('button', { name: 'Search' })
    expect(searchButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(searchButton)
    expect(screen.getByRole('dialog', { name: 'Search' })).toBeInTheDocument()
    expect(searchButton).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(searchButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Mobile nav is rendered below lg; check the mobile link list appears.
    expect(screen.getAllByRole('navigation', { hidden: true }).length).toBeGreaterThan(0)
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Mobile nav links are inside the mobile <nav aria-label="Mobile">.
    const mobileNav = screen
      .getAllByRole('navigation', { hidden: true })
      .find((el) => el.getAttribute('aria-label') === 'Mobile')
    const homeLink = mobileNav?.querySelector('a')
    expect(homeLink).not.toBeNull()
    if (homeLink) await user.click(homeLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
