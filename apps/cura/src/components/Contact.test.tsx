import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the form fields, send button and contact details', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument()
    expect(screen.getByText('(555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('hello@curacare.example')).toBeInTheDocument()
    expect(screen.getByText('123 Wellness Avenue, Springfield')).toBeInTheDocument()
    expect(
      screen.getByText('Mon-Fri: 8:00 AM - 6:00 PM · Sat: 9:00 AM - 1:00 PM'),
    ).toBeInTheDocument()
  })

  it('shows per-field errors for an invalid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    expect(screen.getByText('Please enter your full name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.getByText('Please write a message of at least 10 characters')).toBeInTheDocument()
  })

  it('shows a success confirmation after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/Full Name/), 'Taylor Reed')
    await user.type(screen.getByLabelText(/Email/), 'taylor@example.com')
    await user.type(screen.getByLabelText('Phone'), '555-1234')
    await user.type(screen.getByLabelText(/Message/), 'I would like to ask about appointments.')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    expect(screen.getByRole('heading', { name: 'Message Sent' })).toBeInTheDocument()
    expect(screen.getByText(/Thanks, Taylor Reed!/)).toBeInTheDocument()
    expect(screen.queryByLabelText(/Full Name/)).not.toBeInTheDocument()
  })

  it('clears a field error as soon as the user corrects the field', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    expect(screen.getByText('Please enter your full name')).toBeInTheDocument()
    await user.type(screen.getByLabelText(/Full Name/), 'Ari')
    expect(screen.queryByText('Please enter your full name')).not.toBeInTheDocument()
  })
})
