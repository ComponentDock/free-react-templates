import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: /get in touch with us/i })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders Full Name and Email Address side by side in a row', () => {
    render(<ContactForm />)
    const nameInput = screen.getByLabelText(/full name/i)
    const emailInput = screen.getByLabelText(/email address/i)
    expect(nameInput.parentElement?.parentElement).toBe(emailInput.parentElement?.parentElement)
  })

  it('renders all labels with uppercase CSS class', () => {
    render(<ContactForm />)
    const labels = ['Full Name', 'Email Address', 'Subject', 'Message']
    for (const text of labels) {
      const label = screen.getByText(text)
      expect(label).toHaveClass('uppercase')
    }
  })

  it('renders inputs with light gray background', () => {
    render(<ContactForm />)
    const nameInput = screen.getByLabelText(/full name/i)
    expect(nameInput).toHaveClass('bg-input-bg')
  })

  it('renders the textarea with adequate height', () => {
    render(<ContactForm />)
    const textarea = screen.getByLabelText(/message/i)
    expect(textarea.tagName).toBe('TEXTAREA')
    expect(textarea).toHaveAttribute('rows', '5')
  })

  it('allows typing in form fields', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    expect(screen.getByLabelText(/full name/i)).toHaveValue('John Doe')
  })

  it('submits without error', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
  })
})
