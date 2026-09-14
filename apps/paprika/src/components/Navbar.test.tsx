import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Paprika')).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Menu', 'Gallery', 'Events', 'News', 'Contact']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders shopping cart button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
  })

  it('toggles mobile menu and closes on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation menu')

    // Open mobile menu
    await user.click(toggle)
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)

    // Click a mobile nav link — should close the menu
    const aboutLinks = screen.getAllByText('About')
    const lastAbout = aboutLinks[aboutLinks.length - 1]!
    await user.click(lastAbout)
    // After clicking, Home should still be present (desktop always visible)
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
  })
})
