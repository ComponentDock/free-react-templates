import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand text', () => {
    render(<Navbar />)
    expect(screen.getByText('Dine')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const label of ['Home', 'Recipes', 'About', 'News', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    // Services is a button, not a link
    expect(screen.getAllByRole('button', { name: 'Services' }).length).toBeGreaterThanOrEqual(1)
  })

  it('toggles the services dropdown to show 3 items', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Dropdown items should not be visible initially
    expect(screen.queryByText('Catering')).not.toBeInTheDocument()

    // Click the Services button to open dropdown
    const servicesButton = screen.getAllByRole('button', { name: 'Services' })[0]!
    await user.click(servicesButton)

    // Should show 3 dropdown items
    expect(screen.getByText('Catering')).toBeInTheDocument()
    expect(screen.getByText('Private Events')).toBeInTheDocument()
    expect(screen.getByText('Reservations')).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Mobile menu is hidden initially
    const mobileNav = screen.getByLabelText('Mobile')
    expect(mobileNav).toHaveClass('hidden')

    // Click the mobile toggle to open
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(mobileNav).toHaveClass('block')
    expect(toggle).toHaveAttribute('aria-label', 'Close menu')

    // Click a mobile link to close
    const mobileLinks = mobileNav.querySelectorAll('a')
    await user.click(mobileLinks[0]!)
    expect(mobileNav).toHaveClass('hidden')
  })
})
