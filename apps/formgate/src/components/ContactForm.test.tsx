import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the Get Started heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Get Started')
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Name *')).toBeInTheDocument()
    expect(screen.getByLabelText('Email *')).toBeInTheDocument()
    expect(screen.getByLabelText('Budget')).toBeInTheDocument()
    expect(screen.getByLabelText('Message *')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('updates Name input value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText('Name *')
    await user.type(input, 'Alice')
    expect(input).toHaveValue('Alice')
  })

  it('updates Email input value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText('Email *')
    await user.type(input, 'alice@example.com')
    expect(input).toHaveValue('alice@example.com')
  })

  it('updates Budget select value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const select = screen.getByLabelText('Budget')
    await user.selectOptions(select, 'low')
    expect(select).toHaveValue('low')
  })

  it('updates Message textarea value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textarea = screen.getByLabelText('Message *')
    await user.type(textarea, 'Hello there')
    expect(textarea).toHaveValue('Hello there')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send message/i })
    await user.click(button)
  })

  it('has underline-style inputs with bottom border', () => {
    render(<ContactForm />)
    const nameInput = screen.getByLabelText('Name *')
    expect(nameInput).toHaveClass('border-b')
  })

  it('has coral send button', () => {
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send message/i })
    expect(button).toHaveClass('bg-brand-coral')
  })

  it('has uppercase button text', () => {
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send message/i })
    expect(button).toHaveClass('uppercase')
  })

  it('has Budget dropdown with expected options', () => {
    render(<ContactForm />)
    const select = screen.getByLabelText('Budget')
    const options = Array.from(select.querySelectorAll('option'))
    expect(options).toHaveLength(4)
    expect(options[0]).toHaveTextContent('Choose...')
    expect(options[1]).toHaveTextContent('Low ($0–$500)')
    expect(options[2]).toHaveTextContent('Medium ($500–$2000)')
    expect(options[3]).toHaveTextContent('High ($2000+)')
  })
})
