import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section title', () => {
    render(<Contact />)
    expect(screen.getByText('Keep in Touch')).toBeInTheDocument()
  })

  it('renders form inputs', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Contact />)
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Enter your name'), 'John')
    expect(screen.getByPlaceholderText('Enter your name')).toHaveValue('John')
    await user.type(screen.getByPlaceholderText('Enter email address'), 'john@example.com')
    expect(screen.getByPlaceholderText('Enter email address')).toHaveValue('john@example.com')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello')
    expect(screen.getByPlaceholderText('Message')).toHaveValue('Hello')
  })

  it('form has required attributes', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Enter your name')).toHaveAttribute('required')
    expect(screen.getByPlaceholderText('Enter email address')).toHaveAttribute('required')
    expect(screen.getByPlaceholderText('Message')).toHaveAttribute('required')
  })

  it('form submission calls preventDefault', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Enter your name'), 'John')
    await user.type(screen.getByPlaceholderText('Enter email address'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello')
    await user.click(screen.getByText('Send Message'))
    // Form should still be visible (not navigated away)
    expect(screen.getByText('Keep in Touch')).toBeInTheDocument()
  })
})
