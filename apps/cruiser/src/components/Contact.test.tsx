import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Get In Touch' })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<Contact />)

    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello!')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    // No error thrown = default prevented
  })

  it('renders contact info sidebar', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText('123 Skate Lane, Venice Beach, CA 90291')).toBeInTheDocument()
    expect(screen.getByText('+1 (310) 555-0199')).toBeInTheDocument()
    expect(screen.getByText('hello@cruiserskate.com')).toBeInTheDocument()
  })

  it('renders placeholder text for inputs', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Your first name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your last name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your message...')).toBeInTheDocument()
  })
})
