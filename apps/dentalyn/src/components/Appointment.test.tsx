import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('shows heading and form fields', () => {
    render(<Appointment />)

    expect(screen.getByRole('heading', { name: 'Book An Appointment' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book Appointment' })).toBeInTheDocument()
  })

  it('allows filling in all form fields and selecting dropdowns', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John Doe')
    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('John Doe')

    await user.type(screen.getByPlaceholderText('Your Phone'), '555-1234')
    expect(screen.getByPlaceholderText('Your Phone')).toHaveValue('555-1234')

    await user.type(screen.getByPlaceholderText('Your Email'), 'john@example.com')
    expect(screen.getByPlaceholderText('Your Email')).toHaveValue('john@example.com')

    await user.type(screen.getByPlaceholderText('Your Address'), '123 Main St')
    expect(screen.getByPlaceholderText('Your Address')).toHaveValue('123 Main St')

    await user.type(screen.getByPlaceholderText('Your Message'), 'Hello')
    expect(screen.getByPlaceholderText('Your Message')).toHaveValue('Hello')
  })

  it('allows changing schedule and time selects', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    const selects = screen.getAllByRole('combobox')
    expect(selects.length).toBe(2)
    const scheduleSelect = selects[0]!
    const timeSelect = selects[1]!

    await user.selectOptions(scheduleSelect, '9 AM to 10 AM')
    expect(scheduleSelect).toHaveValue('9 AM to 10 AM')

    await user.selectOptions(timeSelect, '2 PM to 4 PM')
    expect(timeSelect).toHaveValue('2 PM to 4 PM')
  })

  it('submits the form without navigation', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Your Phone'), '555-0000')
    await user.type(screen.getByPlaceholderText('Your Email'), 'jane@test.com')

    await user.click(screen.getByRole('button', { name: 'Book Appointment' }))
    // Form should not navigate (preventDefault called)
    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('Jane')
  })
})
