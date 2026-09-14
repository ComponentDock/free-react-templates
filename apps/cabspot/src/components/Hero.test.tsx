import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Need a ride? Just Call')
  })

  it('renders the phone number', () => {
    render(<Hero />)
    expect(screen.getByText('911 999 911')).toBeInTheDocument()
  })

  it('renders the Call for Taxi button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /call for taxi/i })).toBeInTheDocument()
  })

  it('renders the booking form inputs', () => {
    render(<Hero />)
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/from/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/to/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/date and time/i)).toBeInTheDocument()
  })

  it('renders the Make Reservation button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /make reservation/i })).toBeInTheDocument()
  })

  it('allows typing in all form inputs', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.type(screen.getByLabelText(/your name/i), 'John')
    expect(screen.getByLabelText(/your name/i)).toHaveValue('John')

    await user.type(screen.getByLabelText(/your email/i), 'john@example.com')
    expect(screen.getByLabelText(/your email/i)).toHaveValue('john@example.com')

    await user.type(screen.getByLabelText(/your phone/i), '555-1234')
    expect(screen.getByLabelText(/your phone/i)).toHaveValue('555-1234')
  })

  it('allows selecting from dropdowns', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.selectOptions(screen.getByLabelText(/from/i), 'Airport')
    expect(screen.getByLabelText(/from/i)).toHaveValue('Airport')

    await user.selectOptions(screen.getByLabelText(/to/i), 'Downtown')
    expect(screen.getByLabelText(/to/i)).toHaveValue('Downtown')
  })

  it('allows setting date and time', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const dateInput = screen.getByLabelText(/date and time/i)
    await user.type(dateInput, '2026-12-25T10:00')
    expect(dateInput).toHaveValue('2026-12-25T10:00')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: /make reservation/i }))
    // Form submission should not throw
  })
})
