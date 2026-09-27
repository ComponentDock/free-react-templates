import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders contact info items', () => {
    render(<Contact />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<Contact />)
    expect(screen.getByText('160 Pennsylvania Ave NW')).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByText('Send a Message')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the send message button', () => {
    render(<Contact />)
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('allows typing in the name input', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const input = screen.getByPlaceholderText('Your Name')
    await user.type(input, 'John')
    expect(input).toHaveValue('John')
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const input = screen.getByPlaceholderText('Your Email')
    await user.type(input, 'john@example.com')
    expect(input).toHaveValue('john@example.com')
  })

  it('allows typing in the message textarea', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const textarea = screen.getByPlaceholderText('Message')
    await user.type(textarea, 'Hello there')
    expect(textarea).toHaveValue('Hello there')
  })

  it('allows form submission without page reload', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const submitBtn = screen.getByText('Send Message')
    await user.click(submitBtn)
    // Form should not navigate away (preventDefault)
    expect(screen.getByText('Send a Message')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Contact />)
    const socialLinks = screen.getAllByRole('link', { name: /social link/i })
    expect(socialLinks.length).toBe(4)
  })
})
