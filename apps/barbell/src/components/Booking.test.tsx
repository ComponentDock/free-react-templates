import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Booking } from './Booking'

describe('Booking', () => {
  it('renders the booking headline, inputs and submit button', () => {
    render(<Booking />)
    expect(screen.getByRole('heading', { name: 'Book Your First Class' })).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail Address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('shows inline errors and does not submit on missing input', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getAllByRole('alert')).toHaveLength(3)
    expect(screen.getByText('Your name is required.')).toBeInTheDocument()
    expect(screen.getByText('Your phone number is required.')).toBeInTheDocument()
    expect(screen.getByText('A valid email address is required.')).toBeInTheDocument()
  })

  it('rejects an invalid email format', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    await user.type(screen.getByLabelText('Your Name'), 'Ada')
    await user.type(screen.getByLabelText('Your Phone'), '+1 555 0100')
    await user.type(screen.getByLabelText('E-mail Address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByText('A valid email address is required.')).toBeInTheDocument()
  })

  it('shows a confirmation message on valid submit', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    await user.type(screen.getByLabelText('Your Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Your Phone'), '+1 555 0100')
    await user.type(screen.getByLabelText('E-mail Address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(
      screen.getByText('Thanks, Ada Lovelace! We will contact you shortly.'),
    ).toBeInTheDocument()
    expect(screen.queryByLabelText('Your Name')).not.toBeInTheDocument()
  })
})
