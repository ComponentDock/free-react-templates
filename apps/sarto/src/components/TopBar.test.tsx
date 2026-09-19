import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the phone number', () => {
    render(<TopBar />)
    expect(screen.getByText(/Call Us:/)).toBeInTheDocument()
  })

  it('renders Login/Register, My Account, and Contact Us links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Login/Register' })).toHaveAttribute('href', '#login')
    expect(screen.getByRole('link', { name: 'My Account' })).toHaveAttribute('href', '#account')
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '#contact')
  })
})
