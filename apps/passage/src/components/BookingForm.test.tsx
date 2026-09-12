import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the section heading', () => {
    render(<BookingForm />)
    expect(screen.getByText('Schedule Your Immigration Consultation')).toBeInTheDocument()
  })

  it('renders the Book Now label', () => {
    render(<BookingForm />)
    expect(screen.getByText('Book Now')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<BookingForm />)
    expect(screen.getByText(/Fill out the form and our team/)).toBeInTheDocument()
  })

  it('renders all form inputs', () => {
    render(<BookingForm />)
    expect(screen.getByRole('textbox', { name: 'Full Name' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Email Address' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Destination Country' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Phone Number' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Message' })).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<BookingForm />)
    const btn = screen.getByRole('button', { name: 'Submit Booking' })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('type', 'submit')
  })

  it('has the booking form landmark', () => {
    render(<BookingForm />)
    expect(screen.getByRole('form', { name: 'Booking form' })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    render(<BookingForm />)

    const form = screen.getByRole('form', { name: 'Booking form' })
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.spyOn(submitEvent, 'preventDefault')
    form.dispatchEvent(submitEvent)

    expect(preventDefault).toHaveBeenCalled()
  })
})
