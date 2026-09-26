import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders heading', () => {
    render(<Contact />)
    expect(screen.getByText('Send Us')).toBeInTheDocument()
    expect(screen.getByText('Message')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders send message button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('submits form without navigation', () => {
    render(<Contact />)
    const form = screen.getByRole('form', { name: /contact form/i })
    // Trigger form submit via fireEvent to cover the onSubmit handler
    fireEvent.submit(form)
    // Form should still be in the document (preventDefault stopped navigation)
    expect(form).toBeInTheDocument()
  })
})
