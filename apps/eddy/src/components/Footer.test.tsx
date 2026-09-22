import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the 4 columns: Address, Reservations, Newsletter, and Social', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Address' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Reservations' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)

    expect(screen.getByText('123 Beach Road, Oceanview, Paradise Island')).toBeInTheDocument()
    expect(screen.getByText('+1 (800) 123-456')).toBeInTheDocument()
    expect(screen.getByText('info@eddy-resort.com')).toBeInTheDocument()
  })

  it('renders reservation links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Room Types' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Check Availability' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Special Offers' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Group Bookings' })).toBeInTheDocument()
  })

  it('submits the newsletter form and clears the email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))

    expect(input).toHaveValue('')
  })

  it('renders social media links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows the current year in the copyright line', () => {
    render(<Footer />)

    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Eddy`))).toBeInTheDocument()
  })
})
