import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Reservation } from './Reservation'
import { reservation } from '../data'

describe('Reservation', () => {
  it('renders the heading, copy and form fields', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Reserve Your Seats to Confirm if You Come with Your Family',
    )
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Select Date & time')).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: '' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: reservation.cta })).toBeInTheDocument()
  })

  it('lists all four event options in the select', () => {
    render(<Reservation />)
    const select = screen.getByRole('combobox', { name: '' })
    for (const eventName of reservation.events) {
      expect(select).toHaveTextContent(eventName)
    }
  })

  it('shows validation errors when the form is submitted empty', () => {
    render(<Reservation />)
    fireEvent.click(screen.getByRole('button', { name: reservation.cta }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument()
    expect(screen.getByText('Please choose a date & time')).toBeInTheDocument()
    expect(screen.getByText('Please choose an event')).toBeInTheDocument()
  })

  it('shows a success message after a valid submission', () => {
    render(<Reservation />)
    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'Ada Lovelace' },
    })
    fireEvent.change(screen.getByPlaceholderText('Your Email Address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Phone Number'), {
      target: { value: '012-6532-568-9746' },
    })
    fireEvent.change(screen.getByPlaceholderText('Select Date & time'), {
      target: { value: '2026-08-20T19:00' },
    })
    fireEvent.change(screen.getByRole('combobox', { name: '' }), {
      target: { value: 'Event One' },
    })
    fireEvent.click(screen.getByRole('button', { name: reservation.cta }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thank you, Ada Lovelace. Your table is reserved — we will confirm shortly.',
    )
  })

  it('clears a field error once the user types a valid value', () => {
    render(<Reservation />)
    fireEvent.click(screen.getByRole('button', { name: reservation.cta }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()

    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'Ada' },
    })
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
  })
})
