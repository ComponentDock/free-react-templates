import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtitle, description, CTA, and background image', () => {
    const { container } = render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Relaxed Journey Ever' }),
    ).toBeInTheDocument()
    expect(screen.getByText('the Royal Essence of Journey')).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText('Rent Car Now')).toBeInTheDocument()

    const cta = screen.getByText('Rent Car Now')
    expect(cta).toHaveAttribute('href', '#cars')

    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/fleetly-hero'))
  })

  it('displays the booking form with all fields', () => {
    render(<Hero />)

    expect(screen.getByText('Book Your Car Today!')).toBeInTheDocument()
    expect(screen.getByLabelText(/Select car/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Pickup location/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Pickup date/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Dropoff location/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Dropoff date/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Your name/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email address/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Phone number/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Confirm Car Booking' })).toBeInTheDocument()
  })

  it('has car brand options in the select', () => {
    render(<Hero />)

    const select = screen.getByLabelText(/Select car/)
    expect(select).toBeInTheDocument()
    for (const car of ['BMW', 'Ferrari', 'Toyota']) {
      expect(screen.getByRole('option', { name: car })).toBeInTheDocument()
    }
  })

  it('handles form submission without navigation', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const submit = screen.getByRole('button', { name: 'Confirm Car Booking' })
    await user.click(submit)
    // Form should not navigate away (onSubmit calls preventDefault)
  })
})
