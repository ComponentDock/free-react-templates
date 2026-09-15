import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders contact heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write your message.')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders sidebar text and CTA', () => {
    render(<Contact />)
    expect(screen.getByText(/Need to know more on details/)).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('allows typing in all form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('First name'), 'John')
    await user.type(screen.getByPlaceholderText('Last name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email address'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Write your message.'), 'Hello')
    expect(screen.getByPlaceholderText('First name')).toHaveValue('John')
    expect(screen.getByPlaceholderText('Last name')).toHaveValue('Doe')
    expect(screen.getByPlaceholderText('Email address')).toHaveValue('john@example.com')
    expect(screen.getByPlaceholderText('Write your message.')).toHaveValue('Hello')
  })

  it('submits form without errors', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('First name'), 'John')
    await user.type(screen.getByPlaceholderText('Email address'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Write your message.'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
  })
})
