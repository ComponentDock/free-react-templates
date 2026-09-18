import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('HireFlow')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Category' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Price' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Signup and Login buttons', () => {
    render(<Navbar />)
    const signupButtons = screen.getAllByText('Signup')
    const loginButtons = screen.getAllByText('Login')
    expect(signupButtons.length).toBeGreaterThanOrEqual(1)
    expect(loginButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByLabelText('Toggle menu')
    await user.click(toggleButton)
    expect(screen.getByLabelText('Toggle menu')).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggleButton)
    expect(screen.getByLabelText('Toggle menu')).toHaveAttribute('aria-expanded', 'false')
  })
})
