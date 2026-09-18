import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders form heading', () => {
    render(<Appointment />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Make an Appointment')
  })

  it('renders all form fields', () => {
    render(<Appointment />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('shows thank you message after submission', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByText('Thank You!')).toBeInTheDocument()
    expect(screen.getByText(/appointment request has been submitted/)).toBeInTheDocument()
  })

  it('does not show form after submission', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.queryByPlaceholderText('Name')).not.toBeInTheDocument()
  })
})
