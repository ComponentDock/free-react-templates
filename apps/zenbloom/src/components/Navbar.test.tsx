import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Zenbloom' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Trainers', 'Classes', 'Schedule', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-label', 'Close menu')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Click a mobile nav link (the second "Home" link is in the mobile menu)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    const mobileLink = homeLinks.at(-1)
    if (mobileLink) await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
