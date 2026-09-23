import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('allows typing in form fields and submitting', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Full Name'), 'John Doe')
    expect(screen.getByLabelText('Full Name')).toHaveValue('John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    expect(screen.getByLabelText('Email')).toHaveValue('john@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    expect(screen.getByLabelText('Message')).toHaveValue('Hello there')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
  })
})
