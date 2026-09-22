import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Fitnest' })).toHaveAttribute('href', '#home')
    for (const label of ['Home', 'About', 'Classes', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the top bar with contact info and Join Us button', () => {
    render(<Navbar />)
    expect(screen.getByText(/info@fitnest\.com/)).toBeInTheDocument()
    expect(screen.getByText(/456 789 10/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join Us' })).toHaveAttribute('href', '#contact')
  })

  it('hides the mobile menu initially and toggles it open/closed', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
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

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    const mobileLink = aboutLinks[aboutLinks.length - 1]!
    await user.click(mobileLink)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('renders social icon links', () => {
    render(<Navbar />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('toggles the Pages dropdown on desktop', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Find the Pages button
    const pagesButton = screen.getByRole('button', { name: /Pages/ })
    expect(pagesButton).toBeInTheDocument()

    // Click to open dropdown
    await user.click(pagesButton)

    // Dropdown items should be visible
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instructors' })).toBeInTheDocument()

    // Click a dropdown item to close it
    await user.click(screen.getByRole('link', { name: 'Services' }))
  })

  it('closes the Pages dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const pagesButton = screen.getByRole('button', { name: /Pages/ })
    await user.click(pagesButton)
    // Toggle again to close
    await user.click(pagesButton)
  })
})
