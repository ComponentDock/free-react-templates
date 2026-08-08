import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, intro, side panel, and contact details', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: "Let's Create Together" })).toBeInTheDocument()
    expect(screen.getByText(/ready to tell your story/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Details' })).toBeInTheDocument()
    expect(screen.getByText('Call')).toBeInTheDocument()
    expect(screen.getAllByText('Email').length).toBeGreaterThan(0)
    expect(screen.getByText('Studio')).toBeInTheDocument()
    expect(screen.getByText('128 Hudson Street, New York, NY')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /\(555\) 123-4567/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'hello@shutter.photo' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Call Now/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book a Session' })).toBeInTheDocument()
  })

  it('renders the form fields and the submit button', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Session Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Preferred Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Inquiry' })).toBeInTheDocument()
  })

  it('blocks submission and shows a per-field error for an empty form', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Inquiry' }))
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.getByText('Please select a session type.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a preferred date.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a message.')).toBeInTheDocument()
    expect(screen.getAllByRole('alert')).toHaveLength(5)
  })

  it('shows a success state for a valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.selectOptions(screen.getByLabelText('Session Type'), 'Wedding Coverage')
    await user.type(screen.getByLabelText('Preferred Date'), '2026-10-01')
    await user.type(screen.getByLabelText('Message'), 'We would love to book you!')
    await user.click(screen.getByRole('button', { name: 'Send Inquiry' }))
    expect(screen.getByRole('status')).toHaveTextContent('Inquiry sent successfully!')
    expect(screen.getByText(/thank you, Jane Doe/i)).toBeInTheDocument()
  })
})
