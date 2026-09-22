import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the heading', () => {
    render(<BookingForm />)
    expect(screen.getByText('Reserve A Perfect Room')).toBeInTheDocument()
  })

  it('renders the Reservation subheading', () => {
    render(<BookingForm />)
    expect(screen.getByText('Reservation')).toBeInTheDocument()
  })

  it('renders booking form elements', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText(/check in/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/check out/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/room type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/adults/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/children/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reserve/i })).toBeInTheDocument()
  })

  it('renders room type select options', () => {
    render(<BookingForm />)
    expect(screen.getByRole('option', { name: 'Select Room' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Suite' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Family' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Deluxe' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Classic' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Superior' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Luxe' })).toBeInTheDocument()
  })

  it('renders date inputs', () => {
    render(<BookingForm />)
    const checkin = document.getElementById('checkin')
    const checkout = document.getElementById('checkout')
    expect(checkin).toBeInTheDocument()
    expect(checkin?.getAttribute('type')).toBe('date')
    expect(checkout).toBeInTheDocument()
    expect(checkout?.getAttribute('type')).toBe('date')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    const submitButton = screen.getByRole('button', { name: /reserve/i })
    await user.click(submitButton)
    // Form should not navigate (onSubmit prevents default)
  })
})
