import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: /send us a message/i })).toBeInTheDocument()
  })

  it('updates Name input value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText('Name')
    await user.type(input, 'Jane')
    expect(input).toHaveValue('Jane')
  })

  it('updates Email input value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText('Email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('updates Phone input value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText('Phone')
    await user.type(input, '555-1234')
    expect(input).toHaveValue('555-1234')
  })

  it('updates Message textarea value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textarea = screen.getByLabelText('Message')
    await user.type(textarea, 'Hello')
    expect(textarea).toHaveValue('Hello')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send/i })
    await user.click(button)
  })

  it('has rounded inputs', () => {
    render(<ContactForm />)
    const input = screen.getByLabelText('Name')
    expect(input).toHaveClass('rounded-lg')
  })

  it('has purple send button', () => {
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send/i })
    expect(button).toHaveClass('bg-brand')
  })

  it('has uppercase heading', () => {
    render(<ContactForm />)
    const heading = screen.getByRole('heading', { name: /send us a message/i })
    expect(heading).toHaveClass('uppercase')
  })
})
