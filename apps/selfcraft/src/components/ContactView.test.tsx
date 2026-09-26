import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactView } from './ContactView'

describe('ContactView', () => {
  it('displays the Contact Me heading', () => {
    render(<ContactView />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Me')
  })

  it('renders all form fields', () => {
    render(<ContactView />)

    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactView />)

    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<ContactView />)

    const nameInput = screen.getByPlaceholderText('Full Name')
    await user.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')

    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.type(emailInput, 'john@example.com')
    expect(emailInput).toHaveValue('john@example.com')

    const phoneInput = screen.getByPlaceholderText('Phone')
    await user.type(phoneInput, '555-0123')
    expect(phoneInput).toHaveValue('555-0123')

    const messageInput = screen.getByPlaceholderText('Message')
    await user.type(messageInput, 'Hello!')
    expect(messageInput).toHaveValue('Hello!')
  })

  it('form inputs have correct styling', () => {
    render(<ContactView />)

    const nameInput = screen.getByPlaceholderText('Full Name')
    expect(nameInput.className).toContain('h-[50px]')
    expect(nameInput.className).toContain('border-2')

    const messageInput = screen.getByPlaceholderText('Message')
    expect(messageInput.className).toContain('min-h-[120px]')
  })

  it('submit button has correct styling', () => {
    render(<ContactView />)

    const button = screen.getByRole('button', { name: 'Send Message' })
    expect(button.className).toContain('bg-brand')
    expect(button.className).toContain('uppercase')
    expect(button.className).toContain('tracking-[0.2em]')
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<ContactView />)

    await user.type(screen.getByPlaceholderText('Full Name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Email Address'), 'jane@test.com')
    await user.type(screen.getByPlaceholderText('Phone'), '555-1234')
    await user.type(screen.getByPlaceholderText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    // Form submits without throwing
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })
})
