import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders the consultation heading and all form fields', () => {
    render(<Appointment />)
    expect(screen.getByRole('heading', { name: /Free Consultation/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/Select services/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Vehicle number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^Date$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^Time$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^Message$/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send message/i })).toBeInTheDocument()
  })

  it('blocks submission until the required fields are filled', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.click(screen.getByRole('button', { name: /Send message/i }))
    expect(screen.queryByText(/Booking confirmed/i)).not.toBeInTheDocument()
  })

  it('shows a confirmation after a valid appointment submit', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.selectOptions(screen.getByLabelText(/Select services/i), 'Change Oil')
    await user.type(screen.getByLabelText(/Your Name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/Vehicle number/i), 'ABC-1234')
    fireEvent.change(screen.getByLabelText(/^Date$/i), { target: { value: '2026-09-01' } })
    await user.type(screen.getByLabelText(/^Time$/i), '10:30')
    await user.type(screen.getByLabelText(/^Message$/i), 'Engine makes a noise')
    expect(screen.getByLabelText(/Select services/i)).toHaveValue('Change Oil')
    await user.click(screen.getByRole('button', { name: /Send message/i }))
    expect(screen.getByText(/Booking confirmed/i)).toBeInTheDocument()
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/Your Name/i)).not.toBeInTheDocument()
  })
})
