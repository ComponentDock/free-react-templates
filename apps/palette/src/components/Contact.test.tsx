import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Contact Me' })).toBeInTheDocument()
  })

  it('renders the contact form with all fields', () => {
    render(<Contact />)

    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('renders contact info cards', () => {
    render(<Contact />)

    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('123 Main St, New York, NY 10001')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Website')).toBeInTheDocument()
  })

  it('allows filling out and submitting the form', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Your Email'), 'jane@test.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Test message')

    await user.click(screen.getByRole('button', { name: 'Send Message' }))
  })
})
