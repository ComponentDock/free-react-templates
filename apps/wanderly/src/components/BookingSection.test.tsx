import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingSection } from './BookingSection'

describe('BookingSection', () => {
  it('renders all three tabs', () => {
    render(<BookingSection />)
    expect(screen.getByRole('tab', { name: 'Hotels' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Flights' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Places' })).toBeInTheDocument()
  })

  it('shows Hotels form by default', () => {
    render(<BookingSection />)
    expect(screen.getByPlaceholderText('Choose destination')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Check-in date')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Check-out date')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Guests')).toBeInTheDocument()
  })

  it('switches to Flights tab on click', async () => {
    const user = userEvent.setup()
    render(<BookingSection />)
    await user.click(screen.getByRole('tab', { name: 'Flights' }))
    expect(screen.getByPlaceholderText('From')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('To')).toBeInTheDocument()
  })

  it('switches to Places tab on click', async () => {
    const user = userEvent.setup()
    render(<BookingSection />)
    await user.click(screen.getByRole('tab', { name: 'Places' }))
    expect(screen.getByPlaceholderText('Destination')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Duration')).toBeInTheDocument()
  })

  it('renders Search button', () => {
    render(<BookingSection />)
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<BookingSection />)
    const searchBtn = screen.getByText('Search')
    await user.click(searchBtn)
  })
})
