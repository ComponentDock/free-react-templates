import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('shows the reservation form with all fields and submit button', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Book a Table')
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Number of Guests')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Book Now/i })).toBeInTheDocument()
  })

  it('prevents default form submission', () => {
    render(<Reservation />)
    const form = screen.getByLabelText('Name').closest('form')!
    // fireEvent.submit triggers the onSubmit handler which calls e.preventDefault()
    const defaultPrevented = !fireEvent.submit(form)
    expect(defaultPrevented).toBe(true)
  })
})
