import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand column with logo and blurb', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /roamly home/i })).toBeInTheDocument()
    expect(screen.getByText('Roamly')).toBeInTheDocument()
    expect(screen.getByText(/Discover extraordinary destinations/)).toBeInTheDocument()
  })

  it('renders the Destinations and Company link columns', () => {
    render(<Footer />)
    for (const label of ['Bali', 'Greece', 'Japan', 'Peru']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of ['About Us', 'Our Team', 'Careers', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Support column', () => {
    render(<Footer />)
    expect(screen.getByText(/Our travel experts are always just a call away/)).toBeInTheDocument()
    expect(screen.getByText('(555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('hello@roamly.example')).toBeInTheDocument()
  })

  it('renders the newsletter form and bottom bar', () => {
    render(<Footer />)
    expect(screen.getByText(/Subscribe for exclusive deals/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByText('© 2026 Roamly. All rights reserved.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })

  it('shows an error for an invalid email and success for a valid one', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Enter your email'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()

    await user.clear(screen.getByPlaceholderText('Enter your email'))
    await user.type(screen.getByPlaceholderText('Enter your email'), 'traveler@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('Enter your email')).not.toBeInTheDocument()
    expect(screen.queryByText('Please enter a valid email address.')).not.toBeInTheDocument()
  })
})
