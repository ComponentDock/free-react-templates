import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, link columns, contact details, and legal links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Seacliff home' })).toBeInTheDocument()
    expect(screen.getByText(/Miami Beach, Florida/)).toBeInTheDocument()
    expect(screen.getByText('1 Ocean Drive, Miami Beach, FL 33139')).toBeInTheDocument()
    expect(screen.getByText('(555) 456-7890')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'reservations@seacliff.com' })).toBeInTheDocument()

    for (const heading of ['Hotel', 'Explore', 'Guest Services', 'Stay Updated']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }

    for (const link of [
      'Rooms',
      'Amenities',
      'Dining',
      'Spa',
      'Local Attractions',
      'Activities',
      'Events',
      'Transportation',
      'Concierge',
      'FAQ',
      'Accessibility',
      'Policies',
      'Privacy Policy',
      'Terms of Service',
      'Style Guide',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })

  it('subscribes to the newsletter and shows a confirmation', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'guest@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
  })
})
