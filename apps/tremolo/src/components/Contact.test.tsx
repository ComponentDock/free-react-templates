import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact heading and form fields', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Get in Touch' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows error when submitting with empty fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please fill in all fields.')
  })

  it('shows error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Your name'), 'John')
    await user.type(screen.getByPlaceholderText('Your email'), 'bad')
    await user.type(screen.getByPlaceholderText('Your message'), 'Hello')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
  })

  it('shows success message after valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Your name'), 'John')
    await user.type(screen.getByPlaceholderText('Your email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your message'), 'Hello!')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for reaching out/i)
  })

  it('displays contact information', () => {
    render(<Contact />)
    expect(screen.getByText('123 Culinary Lane, Foodie District, NY 10001')).toBeInTheDocument()
    expect(screen.getByText('(212) 555-0198')).toBeInTheDocument()
    expect(screen.getByText('hello@tremolo.kitchen')).toBeInTheDocument()
  })
})
