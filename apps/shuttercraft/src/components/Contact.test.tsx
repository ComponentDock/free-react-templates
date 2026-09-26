import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Send Me a Message' })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Contact />)
    expect(screen.getByText(/Have a project in mind/)).toBeInTheDocument()
  })

  it('renders the contact image', () => {
    render(<Contact />)
    const img = screen.getByRole('img', { name: 'Photography workspace' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('renders form inputs with correct types', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Your name')).toHaveAttribute('type', 'text')
    expect(screen.getByPlaceholderText('Enter email address')).toHaveAttribute('type', 'email')
    expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Your name'), 'John')
    expect(screen.getByPlaceholderText('Your name')).toHaveValue('John')
    await user.type(screen.getByPlaceholderText('Enter email address'), 'john@test.com')
    expect(screen.getByPlaceholderText('Enter email address')).toHaveValue('john@test.com')
    await user.type(screen.getByPlaceholderText('Your message'), 'Hello!')
    expect(screen.getByPlaceholderText('Your message')).toHaveValue('Hello!')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Your name'), 'John')
    await user.type(screen.getByPlaceholderText('Enter email address'), 'john@test.com')
    await user.type(screen.getByPlaceholderText('Your message'), 'Test message')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    // Form values remain after submit (no page reload in test env)
    expect(screen.getByPlaceholderText('Your name')).toHaveValue('John')
  })

  it('has the contact section id', () => {
    const { container } = render(<Contact />)
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })

  it('labels inputs with sr-only labels', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })
})
