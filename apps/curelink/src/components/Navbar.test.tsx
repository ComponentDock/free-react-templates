import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, section links, and an appointment button', () => {
    render(<Navbar />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Curelink' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Departments', 'Doctors', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Make an Appointment' })).toBeInTheDocument()
  })

  it('toggles the mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toBeInTheDocument()

    await user.click(toggle)
    // Mobile menu should show links
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2) // desktop + mobile

    await user.click(toggle)
    // Mobile menu should be hidden
    const allLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(allLinks.length).toBe(1) // desktop only
  })
})
