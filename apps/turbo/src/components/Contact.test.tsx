import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Contact />)
    expect(screen.getByText(/203 Fake St/i)).toBeInTheDocument()
    expect(screen.getByText('+1 232 3235 324')).toBeInTheDocument()
    expect(screen.getByText('youremail@domain.com')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the send button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('allows typing in all form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Message'), 'Test message')
    expect(screen.getByPlaceholderText('First Name')).toHaveValue('John')
    expect(screen.getByPlaceholderText('Last Name')).toHaveValue('Doe')
    expect(screen.getByPlaceholderText('Email')).toHaveValue('john@example.com')
    expect(screen.getByPlaceholderText('Subject')).toHaveValue('Hello')
    expect(screen.getByPlaceholderText('Message')).toHaveValue('Test message')
  })

  it('resets form on submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: /send/i }))
    expect(screen.getByPlaceholderText('First Name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Last Name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Email')).toHaveValue('')
    expect(screen.getByPlaceholderText('Subject')).toHaveValue('')
    expect(screen.getByPlaceholderText('Message')).toHaveValue('')
  })
})
