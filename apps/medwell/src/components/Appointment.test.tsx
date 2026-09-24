import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders FAQ and form sections', () => {
    render(<Appointment />)
    expect(screen.getByText('Have Some Questions?')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Make an Appointment' })).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Appointment />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('expands first FAQ item by default', () => {
    render(<Appointment />)
    const buttons = screen.getAllByRole('button')
    expect(buttons[0]!).toHaveAttribute('aria-expanded', 'true')
  })

  it('expands a collapsed FAQ item and collapses the previously open one', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    const buttons = screen.getAllByRole('button')
    const second = buttons[1]!
    const first = buttons[0]!
    // Initially first is open
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(second).toHaveAttribute('aria-expanded', 'false')
    // Click second to expand
    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })

  it('collapses an already-open FAQ item when clicked again', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    const buttons = screen.getAllByRole('button')
    const first = buttons[0]!
    // First is open by default
    expect(first).toHaveAttribute('aria-expanded', 'true')
    // Click to collapse
    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.type(screen.getByLabelText('Full Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    const submitBtn = screen.getByRole('button', { name: /make an appointment/i })
    await user.click(submitBtn)
  })
})
