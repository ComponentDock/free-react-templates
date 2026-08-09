import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the booking section, contact number, link columns, and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Booking Repair/i })).toBeInTheDocument()
    expect(screen.getByText('123-4567-7890')).toBeInTheDocument()
    for (const column of ['Quick Link', 'News', 'My Office']) {
      expect(screen.getByRole('heading', { name: column })).toBeInTheDocument()
    }
    expect(screen.getByText(/© 2026 Motorly/)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Automotive/i)).toBeInTheDocument()
  })

  it('blocks the appointment form until required fields are filled', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: /Book Appointment/i }))
    expect(screen.queryByText(/Booking confirmed/i)).not.toBeInTheDocument()
  })

  it('shows a confirmation message after a valid appointment submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText(/Your name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/Phone number/i), '555-1234')
    fireEvent.change(screen.getByLabelText(/Preferred date/i), {
      target: { value: '2026-09-01' },
    })
    await user.click(screen.getByRole('button', { name: /Book Appointment/i }))
    expect(screen.getByText(/Booking confirmed/i)).toBeInTheDocument()
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument()
  })
})
