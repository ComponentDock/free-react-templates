import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline Notary Public & Legal Solutions', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /notary public.*legal solutions/i }),
    ).toBeInTheDocument()
  })

  it('renders form with Name, Email, Date inputs', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
  })

  it('renders Book Appointment button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /book appointment/i })).toBeInTheDocument()
  })

  it('form submission without fields does not show confirmation', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const submitButton = screen.getByRole('button', { name: /book appointment/i })
    await user.click(submitButton)

    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('submitting empty form via fireEvent hits early return', () => {
    render(<Hero />)

    const form = screen.getByRole('button', { name: /book appointment/i }).closest('form')!
    fireEvent.submit(form)

    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('filling all fields and submitting shows confirmation', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@example.com')
    const dateInput = screen.getByLabelText(/date/i)
    await user.type(dateInput, '2026-10-01')

    const submitButton = screen.getByRole('button', { name: /book appointment/i })
    await user.click(submitButton)

    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('Your Name')).not.toBeInTheDocument()
  })
})
