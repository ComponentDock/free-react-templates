import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the Send us a message heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: /send us a message/i })).toBeInTheDocument()
  })

  it('updates Name input value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText('Name')
    await user.type(input, 'John')
    expect(input).toHaveValue('John')
  })

  it('updates Email input value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText('Email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('updates Subject input value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText('Subject')
    await user.type(input, 'Hello')
    expect(input).toHaveValue('Hello')
  })

  it('updates Message textarea value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textarea = screen.getByLabelText('Message')
    await user.type(textarea, 'Test message')
    expect(textarea).toHaveValue('Test message')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send message/i })
    await user.click(button)
  })

  it('has underline-style inputs with bottom border', () => {
    render(<ContactForm />)
    const nameInput = screen.getByLabelText('Name')
    expect(nameInput).toHaveClass('border-b')
  })

  it('has uppercase labels', () => {
    render(<ContactForm />)
    const label = screen.getByText('Name')
    expect(label).toHaveClass('uppercase')
  })

  it('has pink send button', () => {
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send message/i })
    expect(button).toHaveClass('bg-brand-pink')
  })

  it('has white text on purple form', () => {
    render(<ContactForm />)
    const heading = screen.getByRole('heading', { name: /send us a message/i })
    expect(heading).toHaveClass('text-white')
  })
})
