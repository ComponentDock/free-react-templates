import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('renders form heading', () => {
    render(<ContactSection />)
    expect(screen.getByText('Write to us')).toBeInTheDocument()
  })

  it('allows typing in phone and service fields', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    const phoneInput = screen.getByPlaceholderText('Phone Number')
    await user.type(phoneInput, '555-1234')
    expect(phoneInput).toHaveValue('555-1234')
    const serviceInput = screen.getByPlaceholderText('Choose a Service')
    await user.type(serviceInput, 'Legal')
    expect(serviceInput).toHaveValue('Legal')
  })

  it('renders all form fields', () => {
    render(<ContactSection />)
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Choose a Service')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write your message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<ContactSection />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows success message on submit', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    await user.type(screen.getByPlaceholderText('Full Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Write your message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/thank you/i)
  })

  it('clears form fields after successful submission', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    const nameInput = screen.getByPlaceholderText('Full Name')
    await user.type(nameInput, 'John Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Write your message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(nameInput).toHaveValue('')
  })

  it('has a section with id contact', () => {
    render(<ContactSection />)
    expect(document.getElementById('contact')).toBeInTheDocument()
  })
})
