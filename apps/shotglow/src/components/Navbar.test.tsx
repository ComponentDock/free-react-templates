import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Shotglow' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Gallery', 'Pricing', 'Blog', 'Contact']) {
      const links = screen.getAllByRole('link', { name: label })
      expect(links.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the shopping bag button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Shopping bag' })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })

    // Open the mobile menu
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Click a mobile nav link (the second "About" link is in the mobile menu)
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    const mobileLink = aboutLinks[1]!
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
