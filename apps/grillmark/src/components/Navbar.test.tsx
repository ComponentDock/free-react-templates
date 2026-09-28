import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Grillmark/i })).toHaveAttribute('href', '#home')
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of [
      'Home',
      'About',
      'Breakfast',
      'Lunch',
      'Reservation',
      'Chef',
      'Gallery',
      'Contact',
    ]) {
      expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'Breakfast' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
