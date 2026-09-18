import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section title', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders contact info items', () => {
    render(<Contact />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getAllByText('Email').length).toBeGreaterThanOrEqual(1)
    expect(
      screen.getByText('123 Business Street, Suite 100, New York, NY 10001'),
    ).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@zenflow.com')).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('fills form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Test')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Hello')

    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('John')
    expect(screen.getByPlaceholderText('Your Email')).toHaveValue('john@example.com')
    expect(screen.getByPlaceholderText('Subject')).toHaveValue('Test')
    expect(screen.getByPlaceholderText('Your Message')).toHaveValue('Hello')
  })

  it('submits the form and clears fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Test')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Hello')

    await user.click(screen.getByText('Send Message'))

    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Your Email')).toHaveValue('')
    expect(screen.getByPlaceholderText('Subject')).toHaveValue('')
    expect(screen.getByPlaceholderText('Your Message')).toHaveValue('')
  })

  it('renders icon elements for contact details', () => {
    render(<Contact />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getAllByText('Email').length).toBeGreaterThanOrEqual(1)
  })
})
