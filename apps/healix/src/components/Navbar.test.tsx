import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Healix logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Healix')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Services', 'Doctors', 'Departments', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the emergency CTA with phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('+1 234 567 8900')).toBeInTheDocument()
  })

  it('has proper navigation role and label', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    // The mobile menu link is the second one (desktop + mobile)
    await user.click(mobileLinks.at(-1)!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
