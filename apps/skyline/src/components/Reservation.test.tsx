import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reservation } from './Reservation'
import { describe, it, expect } from 'vitest'

describe('Reservation', () => {
  it('renders the section heading', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Reserve a Table')
  })

  it('renders all form fields', () => {
    render(<Reservation />)
    expect(screen.getByLabelText(/Event Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Event Date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Event Time/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Contact Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Special Requests/i)).toBeInTheDocument()
  })

  it('shows confirmation after submission', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    await user.type(screen.getByLabelText(/Event Name/i), 'Anniversary')
    await user.type(screen.getByLabelText(/Contact Name/i), 'Jane')
    await user.type(screen.getByLabelText(/Phone Number/i), '555-1234')
    await user.selectOptions(screen.getByLabelText(/Event Time/i), '19:00')
    await user.selectOptions(screen.getByLabelText(/Number of Guests/i), '2')
    // Set date via the date input
    const dateInput = screen.getByLabelText(/Event Date/i)
    await user.type(dateInput, '2026-12-25')

    await user.click(screen.getByRole('button', { name: /Book Now/i }))

    expect(screen.getByText(/Reservation Received/i)).toBeInTheDocument()
  })

  it('does not show confirmation before submission', () => {
    render(<Reservation />)
    expect(screen.queryByText(/Reservation Received/i)).not.toBeInTheDocument()
  })
})
