import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the contact heading and all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact')

    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('has a dark background section', () => {
    const { container } = render(<ContactForm />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-dark-bg')
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('First Name'), 'John')
    expect(screen.getByLabelText('First Name')).toHaveValue('John')

    await user.type(screen.getByLabelText('Message'), 'Hello!')
    expect(screen.getByLabelText('Message')).toHaveValue('Hello!')
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    // Form submits without throwing
    expect(screen.getByLabelText('First Name')).toHaveValue('Jane')
  })
})
