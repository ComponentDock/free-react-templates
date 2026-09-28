import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the heading and form fields', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Make A Reservation')
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book a table' })).toBeInTheDocument()
  })

  it('renders the time select with options', () => {
    render(<Reservation />)
    const selects = screen.getAllByRole('combobox')
    expect(selects.length).toBeGreaterThanOrEqual(2)
    // The first select is time
    expect(selects[0]).toHaveTextContent('Select Time')
    expect(selects[0]).toHaveTextContent('08:00 AM')
  })

  it('shows validation errors when the form is submitted empty', () => {
    render(<Reservation />)
    fireEvent.click(screen.getByRole('button', { name: 'Book a table' }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument()
    expect(screen.getByText('Please choose a date')).toBeInTheDocument()
    expect(screen.getByText('Please choose a time')).toBeInTheDocument()
    expect(screen.getByText('Please choose number of persons')).toBeInTheDocument()
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
    const dateInput = document.querySelector('input[type="date"]') as HTMLInputElement
    fireEvent.change(dateInput, { target: { value: '2026-08-20' } })

    const selects = screen.getAllByRole('combobox')
    fireEvent.change(selects[0]!, { target: { value: '07:00 PM' } })
    fireEvent.change(selects[1]!, { target: { value: '2 Persons' } })

    fireEvent.click(screen.getByRole('button', { name: 'Book a table' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thank you, Ada Lovelace. Your table is reserved — we will confirm shortly.',
    )
  })

  it('clears a field error once the user types a valid value', () => {
    render(<Reservation />)
    fireEvent.click(screen.getByRole('button', { name: 'Book a table' }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()

    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'Ada' },
    })
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
  })
})
