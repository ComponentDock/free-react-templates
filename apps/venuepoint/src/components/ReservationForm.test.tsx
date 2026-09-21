import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReservationForm } from './ReservationForm'

describe('ReservationForm', () => {
  it('renders the heading', () => {
    render(<ReservationForm />)
    const headings = screen.getAllByText('Make a Reservation')
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the 5 Stars label', () => {
    render(<ReservationForm />)
    expect(screen.getByText('5 Stars')).toBeInTheDocument()
  })

  it('renders date, time, and party size inputs', () => {
    render(<ReservationForm />)
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Party size')).toBeInTheDocument()
  })

  it('has correct default party size', () => {
    render(<ReservationForm />)
    const select = screen.getByLabelText('Party size')
    expect(select).toHaveValue('2 persons')
  })

  it('allows changing party size', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)
    const select = screen.getByLabelText('Party size')
    await user.selectOptions(select, '4 persons')
    expect(select).toHaveValue('4 persons')
  })

  it('renders the submit button', () => {
    render(<ReservationForm />)
    expect(screen.getByRole('button', { name: /make a reservation/i })).toBeInTheDocument()
  })

  it('submits the form and prevents default', () => {
    render(<ReservationForm />)
    const form = screen.getByRole('button', { name: /make a reservation/i }).closest('form')!
    const event = new Event('submit', { bubbles: true, cancelable: true })
    fireEvent(form, event)
    expect(event.defaultPrevented).toBe(true)
  })
})
