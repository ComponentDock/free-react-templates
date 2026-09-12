import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders section heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact')
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Telephone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('updates form fields on input', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    expect(screen.getByPlaceholderText('Name')).toHaveValue('John Doe')
  })

  it('submits form without navigation', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByPlaceholderText('Name'), 'Test')
    await user.type(screen.getByPlaceholderText('Email'), 'test@test.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Telephone'), '123')
    await user.type(screen.getByPlaceholderText('Message'), 'Hi there')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    // Form should not navigate
    expect(screen.getByPlaceholderText('Name')).toHaveValue('Test')
  })
})
