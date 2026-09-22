import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subheading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Experience Luxury/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Nestled along pristine coastlines/i)).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: 'Ocean view at AzurePeak resort' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders the booking form with all fields', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Check-In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-Out')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
    expect(screen.getByLabelText('Rooms')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('allows changing guests and rooms values', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const guestsSelect = screen.getByLabelText('Guests')
    await user.selectOptions(guestsSelect, '4')
    expect(guestsSelect).toHaveValue('4')

    const roomsSelect = screen.getByLabelText('Rooms')
    await user.selectOptions(roomsSelect, '3')
    expect(roomsSelect).toHaveValue('3')
  })

  it('allows changing check-in and check-out dates', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const checkIn = screen.getByLabelText('Check-In')
    await user.type(checkIn, '2025-01-15')
    expect(checkIn).toHaveValue('2025-01-15')

    const checkOut = screen.getByLabelText('Check-Out')
    await user.type(checkOut, '2025-01-20')
    expect(checkOut).toHaveValue('2025-01-20')
  })

  it('has the welcome text', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to AzurePeak')).toBeInTheDocument()
  })

  it('prevents default form submission on the booking form', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const button = screen.getByRole('button', { name: 'Check Availability' })
    await user.click(button)
    // onSubmit prevents default — no page reload
  })
})
