import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders the FAQ heading', () => {
    render(<Appointment />)

    expect(
      screen.getByRole('heading', { level: 2, name: /have some questions/i }),
    ).toBeInTheDocument()
  })

  it('renders the appointment form heading', () => {
    render(<Appointment />)

    expect(
      screen.getByRole('heading', { level: 2, name: /make an appointment/i }),
    ).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Appointment />)

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Appointment />)

    expect(screen.getByRole('button', { name: /make an appointment/i })).toBeInTheDocument()
  })

  it('toggles FAQ accordion items', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    const buttons = screen.getAllByRole('button', { expanded: true })
    expect(buttons.length).toBeGreaterThanOrEqual(1)

    // First item should be open by default
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')

    // Click second item to open it
    const secondButton = screen.getByRole('button', {
      name: /moving creepeth/i,
      expanded: false,
    })
    await user.click(secondButton)
    expect(secondButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes an open FAQ item when clicked again', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    const firstButton = screen.getByRole('button', {
      name: /god male gathering/i,
      expanded: true,
    })
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('submits the appointment form without navigation', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Test message')

    const submitButton = screen.getByRole('button', { name: /make an appointment/i })
    await user.click(submitButton)

    // Form should not navigate (preventDefault)
    expect(screen.getByLabelText(/full name/i)).toHaveValue('John Doe')
  })
})
