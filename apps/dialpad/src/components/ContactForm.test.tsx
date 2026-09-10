import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the heading and form fields', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { level: 2, name: /If you need/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('shows confirmation after submitting', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByPlaceholderText('Enter your name'), 'Alice')
    await user.type(screen.getByPlaceholderText('Enter email address'), 'alice@test.com')
    await user.type(screen.getByPlaceholderText('Enter your subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Your message'), 'Test message')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByText(/Thank you, Alice/i)).toBeInTheDocument()
  })
})
