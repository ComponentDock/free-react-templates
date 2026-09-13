import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Plumero logo, navigation links, search and shopping bag icons', () => {
    render(<Navbar />)

    expect(screen.getAllByRole('link', { name: 'Plumero' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    for (const label of ['Home', 'About', 'Products', 'Pages', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Shopping bag' })).toBeInTheDocument()
  })

  it('shows a mobile menu toggle button', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toBeInTheDocument()
  })

  it('toggles the mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })

    // Initially hidden
    expect(mobileNav).toHaveClass('hidden')

    // Open
    await user.click(toggle)
    expect(mobileNav).not.toHaveClass('hidden')

    // Close
    await user.click(toggle)
    expect(mobileNav).toHaveClass('hidden')
  })
})
