import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('shows validation errors on empty submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Subject is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('shows email validation error', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Your Name'), 'John')
    await user.type(screen.getByLabelText('Your Email'), 'bad-email')
    await user.type(screen.getByLabelText('Subject'), 'Test')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Enter a valid email')).toBeInTheDocument()
  })

  it('shows success message on valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Your Name'), 'John Doe')
    await user.type(screen.getByLabelText('Your Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Consultation')
    await user.type(screen.getByLabelText('Message'), 'I need legal advice.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Thank you! Your message has been sent.')).toBeInTheDocument()
  })

  it('renders office info', () => {
    render(<Contact />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('clears field error when user types', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Your Name'), 'John')
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })
})
