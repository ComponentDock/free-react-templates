import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders Send Us A Message heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: 'Send Us A Message' })).toBeInTheDocument()
  })

  it('renders TELL US YOUR NAME label with First name and Last name inputs side by side', () => {
    render(<ContactForm />)
    expect(screen.getByText(/tell us your name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument()
  })

  it('renders ENTER YOUR EMAIL label with email input', () => {
    render(<ContactForm />)
    expect(screen.getByText(/enter your email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Eg. example@email.com')).toBeInTheDocument()
  })

  it('renders ENTER PHONE NUMBER label without asterisk', () => {
    render(<ContactForm />)
    const label = screen.getByText(/enter phone number/i)
    expect(label).toBeInTheDocument()
    expect(label.textContent).not.toContain('*')
  })

  it('renders MESSAGE label with textarea', () => {
    render(<ContactForm />)
    expect(screen.getByText(/^message/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write us a message')).toBeInTheDocument()
  })

  it('renders SEND MESSAGE green button', () => {
    render(<ContactForm />)
    const btn = screen.getByRole('button', { name: /send message/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass('bg-[#28a745]')
  })

  it('form submission shows success', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByPlaceholderText('First name'), 'John')
    await user.type(screen.getByPlaceholderText('Last name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Eg. example@email.com'), 'john@test.com')
    await user.type(screen.getByPlaceholderText('Write us a message'), 'Hello!')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })

  it('typing in fields works', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByPlaceholderText('First name'), 'Jane')
    expect(screen.getByPlaceholderText('First name')).toHaveValue('Jane')
  })

  it('required fields show validation', async () => {
    render(<ContactForm />)
    const firstNameInput = screen.getByPlaceholderText('First name')
    expect(firstNameInput).toBeRequired()
    const emailInput = screen.getByPlaceholderText('Eg. example@email.com')
    expect(emailInput).toBeRequired()
    const textarea = screen.getByPlaceholderText('Write us a message')
    expect(textarea).toBeRequired()
  })
})
