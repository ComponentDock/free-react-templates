import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders heading and 4 info cards', () => {
    render(<Contact />)

    expect(screen.getByText('Contact Me')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Website')).toBeInTheDocument()
  })

  it('renders contact form fields', () => {
    render(<Contact />)

    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('renders map placeholder', () => {
    render(<Contact />)

    expect(screen.getByRole('img', { name: 'Map placeholder' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('shows success message on form submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'Test User')
    await user.type(screen.getByPlaceholderText('Your Email'), 'test@example.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Thank you! Your message has been sent.')).toBeInTheDocument()
  })
})
