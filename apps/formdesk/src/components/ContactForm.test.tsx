import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/what do you need/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('displays correct placeholders', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('Enter your name...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email...')).toBeInTheDocument()
  })

  it('displays dropdown options', () => {
    render(<ContactForm />)

    const select = screen.getByLabelText(/what do you need/i)
    expect(select).toBeInTheDocument()

    const options = Array.from(select.querySelectorAll('option'))
    expect(options.map((o) => o.textContent)).toEqual([
      'Please choose',
      'UI/UX Design',
      'eCommerce Business',
      'Online Services',
    ])
  })

  it('shows default "Please choose" text when no option selected', () => {
    render(<ContactForm />)

    const select = screen.getByLabelText(/what do you need/i) as HTMLSelectElement
    expect(select.value).toBe('')
  })

  it('submits form with entered data', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<ContactForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText(/full name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await user.selectOptions(screen.getByLabelText(/what do you need/i), 'uiux')
    await user.click(screen.getByRole('button', { name: /send/i }))

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Jane Doe',
      email: 'jane@example.com',
      service: 'uiux',
    })
  })

  it('shows success state after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/full name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await user.selectOptions(screen.getByLabelText(/what do you need/i), 'uiux')
    await user.click(screen.getByRole('button', { name: /send/i }))

    expect(screen.getByTestId('success-state')).toBeInTheDocument()
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    expect(screen.getByText(/your message has been sent/i)).toBeInTheDocument()
  })

  it('allows resetting form after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Submit first
    await user.type(screen.getByLabelText(/full name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await user.selectOptions(screen.getByLabelText(/what do you need/i), 'uiux')
    await user.click(screen.getByRole('button', { name: /send/i }))

    // Reset
    await user.click(screen.getByRole('button', { name: /send another message/i }))
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toHaveValue('')
  })

  it('requires name field', () => {
    render(<ContactForm />)

    // The browser's native validation prevents submission
    const nameInput = screen.getByLabelText(/full name/i)
    expect(nameInput).toBeRequired()
  })

  it('requires email field', () => {
    render(<ContactForm />)

    const emailInput = screen.getByLabelText(/email address/i)
    expect(emailInput).toBeRequired()
  })

  it('requires service selection', () => {
    render(<ContactForm />)

    const select = screen.getByLabelText(/what do you need/i)
    expect(select).toBeRequired()
  })
})
