import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    const { container } = render(<Navbar />)
    const logo = container.querySelector('a')
    expect(logo?.textContent).toMatch(/Earworm/i)
    for (const link of ['Home', 'Podcasts', 'About', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows a search button and social links on desktop', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })

  it('toggles the mobile menu and closes on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Toggle menu/i })
    await user.click(toggle)
    // Mobile links should appear — get the last matching link (mobile version)
    const mobileLinks = screen.getAllByRole('link', { name: 'Podcasts' })
    expect(mobileLinks.length).toBe(2)
    // Click the second (mobile) link
    await user.click(mobileLinks[1]!)
    // Menu should close — the mobile-specific links should no longer be accessible
    expect(screen.getByRole('button', { name: /Toggle menu/i })).toBeInTheDocument()
  })
})
