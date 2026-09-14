import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact Form')
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Full name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject of the message')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/type your message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders office addresses', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'London' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'New York' })).toBeInTheDocument()
  })

  it('allows typing in all form fields and resets on submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText('First name'), 'John')
    await user.type(screen.getByPlaceholderText('Full name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Email address'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Subject of the message'), 'Hello')
    await user.type(screen.getByPlaceholderText(/type your message/i), 'Test message')

    expect(screen.getByPlaceholderText('First name')).toHaveValue('John')
    expect(screen.getByPlaceholderText('Full name')).toHaveValue('John Doe')
    expect(screen.getByPlaceholderText('Email address')).toHaveValue('john@example.com')
    expect(screen.getByPlaceholderText('Subject of the message')).toHaveValue('Hello')
    expect(screen.getByPlaceholderText(/type your message/i)).toHaveValue('Test message')

    fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form')!)

    expect(screen.getByPlaceholderText('First name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Full name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Email address')).toHaveValue('')
    expect(screen.getByPlaceholderText('Subject of the message')).toHaveValue('')
    expect(screen.getByPlaceholderText(/type your message/i)).toHaveValue('')
  })
})
