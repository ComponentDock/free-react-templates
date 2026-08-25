import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the eyebrow and heading', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('renders all four form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('shows validation error when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/All fields are required/i)
  })

  it('submits successfully with all fields filled', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/First name/i), 'John')
    await user.type(screen.getByLabelText(/Last name/i), 'Doe')
    await user.type(screen.getByLabelText(/Email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/Message/i), 'Hello world')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByText(/Thank you!/i)).toBeInTheDocument()
    expect(screen.getByText(/Your message has been sent/i)).toBeInTheDocument()
  })

  it('renders the section with correct id', () => {
    render(<Contact />)
    expect(document.getElementById('contact-section')).toBeInTheDocument()
  })

  it('renders a description paragraph', () => {
    render(<Contact />)
    expect(screen.getByText(/Have a project in mind/i)).toBeInTheDocument()
  })

  it('validates required fields before showing success', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    // Fill only some fields
    await user.type(screen.getByLabelText(/First name/i), 'John')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    // Should not show success
    expect(screen.queryByText(/Thank you!/i)).not.toBeInTheDocument()
  })
})
