import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Enter your email...')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText(/About Us/)).toBeInTheDocument()
    expect(screen.getByText(/Our Rooms/)).toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Enter your email...')
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByLabelText('Subscribe'))
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
