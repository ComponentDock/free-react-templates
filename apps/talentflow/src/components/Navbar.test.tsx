import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Talentflow logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Talentflow')).toBeInTheDocument()
  })

  it('renders all navigation links on desktop', () => {
    render(<Navbar />)
    for (const label of ['Home', 'About', 'Services', 'Team', 'Blog', 'Contact']) {
      const links = screen.getAllByRole('link', { name: label })
      expect(links.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('shows mobile menu button', () => {
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: 'Open menu' })
    expect(btn).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(btn)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes mobile menu on second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('has correct aria attributes', () => {
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: 'Open menu' })
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    expect(btn).toHaveAttribute('aria-controls', 'mobile-menu')
  })

  it('closes menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    // Click a link in the mobile nav (there are multiple "Home" links — get the last one in mobile menu)
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    const lastLink = mobileLinks[mobileLinks.length - 1]
    if (lastLink) await user.click(lastLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
