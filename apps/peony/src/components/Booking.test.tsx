import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Booking } from './Booking'

describe('Booking', () => {
  it('renders the heading and four selectable services', () => {
    render(<Booking />)
    expect(
      screen.getByRole('heading', { level: 2, name: /make an appointment/i }),
    ).toBeInTheDocument()
    const select = screen.getByRole('combobox', { name: /service/i })
    expect(select).toBeInTheDocument()
    for (const service of [
      'Professional Makeup',
      'Manicure Pedicure',
      'Body Treatment',
      'Haircut Coloring',
    ]) {
      expect(screen.getByRole('option', { name: service })).toBeInTheDocument()
    }
  })

  it('shows a confirmation when the form is submitted', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    await user.type(screen.getByLabelText(/name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: /make an appointment/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/appointment request has been received/i)
  })
})
