import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingCard } from './BookingCard'

describe('BookingCard', () => {
  it('renders the heading', () => {
    render(<BookingCard />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/booking tickets/i)
  })

  it('renders all form fields', () => {
    render(<BookingCard />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/person/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/ticket type/i)).toBeInTheDocument()
  })

  it('displays the default price', () => {
    render(<BookingCard />)
    expect(screen.getByText('$20.00')).toBeInTheDocument()
    expect(screen.getByText('/ VIP Person')).toBeInTheDocument()
  })

  it('renders the buy now button', () => {
    render(<BookingCard />)
    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
  })

  it('renders the terms checkbox and link', () => {
    render(<BookingCard />)
    expect(screen.getByRole('checkbox', { name: /by booking/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /terms of service/i })).toBeInTheDocument()
  })

  it('shows subtitle text', () => {
    render(<BookingCard />)
    expect(screen.getByText(/orci ac auctor augue/i)).toBeInTheDocument()
  })

  it('updates price when ticket type changes', async () => {
    render(<BookingCard />)
    const select = screen.getByLabelText(/ticket type/i)
    const user = userEvent.setup()
    await user.selectOptions(select, 'Regular')
    expect(screen.getByText('$10.00')).toBeInTheDocument()
    expect(screen.getByText('/ Regular Person')).toBeInTheDocument()
  })

  it('updates price when person count changes', () => {
    render(<BookingCard />)
    const input = screen.getByLabelText(/person/i)
    fireEvent.change(input, { target: { value: '3' } })
    expect(screen.getByText('$60.00')).toBeInTheDocument()
  })

  it('does not submit when terms are not checked', async () => {
    render(<BookingCard />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John')
    await user.type(screen.getByLabelText(/email/i), 'j@test.com')
    // Set a date
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: '2026-10-01' },
    })
    await user.click(screen.getByRole('button', { name: /buy now/i }))
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('submits successfully when all fields filled and terms checked', async () => {
    render(<BookingCard />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John')
    await user.type(screen.getByLabelText(/email/i), 'j@test.com')
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: '2026-10-01' },
    })
    await user.click(screen.getByRole('checkbox', { name: /by booking/i }))
    await user.click(screen.getByRole('button', { name: /buy now/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })

  it('has correct number of select fields', () => {
    render(<BookingCard />)
    const selects = screen.getAllByRole('combobox')
    expect(selects).toHaveLength(1) // Ticket Type only
  })

  it('does not submit when terms checked but required fields are empty', async () => {
    render(<BookingCard />)
    const user = userEvent.setup()
    // Check terms first
    await user.click(screen.getByRole('checkbox', { name: /by booking/i }))
    // Submit without filling name, email, date
    await user.click(screen.getByRole('button', { name: /buy now/i }))
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('handles person count cleared to empty (falls back to 1)', () => {
    render(<BookingCard />)
    const input = screen.getByLabelText(/person/i)
    fireEvent.change(input, { target: { value: '' } })
    // Falls back to 1 * $20 = $20
    expect(screen.getByText('$20.00')).toBeInTheDocument()
  })

  it('shows Student price correctly', async () => {
    render(<BookingCard />)
    const select = screen.getByLabelText(/ticket type/i)
    const user = userEvent.setup()
    await user.selectOptions(select, 'Student')
    expect(screen.getByText('$15.00')).toBeInTheDocument()
    expect(screen.getByText('/ Student Person')).toBeInTheDocument()
  })

  it('shows confirmation with email after submit', async () => {
    render(<BookingCard />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'Jane')
    await user.type(screen.getByLabelText(/email/i), 'jane@test.com')
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: '2026-12-01' },
    })
    await user.click(screen.getByRole('checkbox', { name: /by booking/i }))
    await user.click(screen.getByRole('button', { name: /buy now/i }))
    expect(screen.getByText(/jane@test.com/)).toBeInTheDocument()
  })

  it('calls onSubmit callback when form is submitted', async () => {
    let called = false
    render(
      <BookingCard
        onSubmit={() => {
          called = true
        }}
      />,
    )
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'Bob')
    await user.type(screen.getByLabelText(/email/i), 'bob@test.com')
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: '2026-11-15' },
    })
    await user.click(screen.getByRole('checkbox', { name: /by booking/i }))
    await user.click(screen.getByRole('button', { name: /buy now/i }))
    expect(called).toBe(true)
  })
})
