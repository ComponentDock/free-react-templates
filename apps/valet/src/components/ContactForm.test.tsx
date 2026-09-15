import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders heading and form fields', () => {
    render(<ContactForm />)
    expect(screen.getByText('Make an Appointment')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText('Your Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@test.com')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    expect(screen.getByLabelText('Your Name')).toHaveValue('John')
    expect(screen.getByLabelText('Email')).toHaveValue('john@test.com')
    expect(screen.getByLabelText('Message')).toHaveValue('Hello')
  })

  it('submits the form', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText('Your Name'), 'Jane')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    // Form submission should not throw
  })
})
