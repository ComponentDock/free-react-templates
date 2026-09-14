import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Mechbot/i })).toHaveAttribute('href', '#home')
    for (const label of ['Home', 'Products', 'About', 'Features', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the Get Started CTA button', () => {
    render(<Navbar />)
    const ctaLinks = screen.getAllByRole('link', { name: 'Get Started' })
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1)
    expect(ctaLinks[0]).toHaveAttribute('href', '#contact')
  })

  it('toggles the mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(document.getElementById('mobile-menu')).not.toHaveClass('hidden')

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('closes mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const blogLinks = screen.getAllByRole('link', { name: 'Blog' })
    const mobileLink = blogLinks[blogLinks.length - 1]!
    await user.click(mobileLink)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('closes mobile menu when the mobile Get Started link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const ctaLinks = screen.getAllByRole('link', { name: 'Get Started' })
    const mobileCta = ctaLinks[ctaLinks.length - 1]!
    await user.click(mobileCta)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })
})
