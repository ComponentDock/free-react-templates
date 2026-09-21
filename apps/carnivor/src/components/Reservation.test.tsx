import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the form heading', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { name: /reservation form/i })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<Reservation />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/number of people/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/event/i)).toBeInTheDocument()
  })

  it('shows validation errors on empty submit', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByRole('button', { name: /make reservation/i }))
    const alerts = screen.getAllByRole('alert')
    expect(alerts.length).toBeGreaterThanOrEqual(1)
  })

  it('shows success message on valid submit', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '+1234567890')
    await user.type(screen.getByLabelText(/date/i), '2026-12-25T19:00')
    await user.click(screen.getByRole('button', { name: /make reservation/i }))
    expect(screen.getByText(/reservation confirmed/i)).toBeInTheDocument()
    expect(screen.getByText(/John Doe/)).toBeInTheDocument()
  })

  it('shows email error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.type(screen.getByLabelText(/name/i), 'John')
    await user.type(screen.getByLabelText(/email/i), 'not-an-email')
    await user.type(screen.getByLabelText(/phone/i), '123')
    await user.type(screen.getByLabelText(/date/i), '2026-12-25T19:00')
    await user.click(screen.getByRole('button', { name: /make reservation/i }))
    expect(screen.getByText(/valid email/i)).toBeInTheDocument()
  })

  it('allows changing party size via select', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    const select = screen.getByLabelText(/number of people/i)
    await user.selectOptions(select, '4')
    expect(select).toHaveValue('4')
  })

  it('allows changing event type via select', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    const select = screen.getByLabelText(/event/i)
    await user.selectOptions(select, 'private')
    expect(select).toHaveValue('private')
  })
})
