import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the section header', () => {
    render(<Reservation />)
    expect(screen.getByText('Reservation')).toBeInTheDocument()
    expect(screen.getByText('Book Your Table')).toBeInTheDocument()
  })

  it('renders the reservation form', () => {
    render(<Reservation />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Number of Guests')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
  })

  it('renders the Book Now button', () => {
    render(<Reservation />)
    expect(screen.getByRole('button', { name: /Book Now/ })).toBeInTheDocument()
  })

  it('renders opening times', () => {
    render(<Reservation />)
    expect(screen.getByText('Opening Time')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
    expect(screen.getAllByText('8:00 am – 11:00 pm').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Friday')).toBeInTheDocument()
    expect(screen.getAllByText('Closed').length).toBeGreaterThanOrEqual(1)
  })

  it('shows confirmation after submit', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    // Fill required fields to pass native validation
    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Phone'), '555-1234')
    await user.type(screen.getByLabelText('Date'), '12/25/2026')
    await user.type(screen.getByLabelText('Time'), '19:00')
    await user.click(screen.getByRole('button', { name: /Book Now/ }))
    expect(screen.getByText(/Thank you! Your reservation request/)).toBeInTheDocument()
  })

  it('renders guest options', () => {
    render(<Reservation />)
    const select = screen.getByLabelText('Number of Guests')
    expect(select).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '1 Person' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '6 People' })).toBeInTheDocument()
  })
})
