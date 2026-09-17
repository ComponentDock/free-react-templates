import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the Say Hello heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: /say hello/i })).toBeInTheDocument()
  })

  it('renders the name input with label and placeholder', () => {
    render(<ContactForm />)
    const nameInput = screen.getByRole('textbox', { name: /your name/i })
    expect(nameInput).toBeInTheDocument()
    expect(nameInput).toHaveAttribute('placeholder', 'Your name')
  })

  it('renders the email input with label and placeholder', () => {
    render(<ContactForm />)
    const emailInput = screen.getByRole('textbox', { name: /email/i })
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute('type', 'email')
    expect(emailInput).toHaveAttribute('placeholder', 'Enter your email address')
  })

  it('renders the services dropdown with label', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/needed services/i)).toBeInTheDocument()
  })

  it('renders the budget dropdown with label', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/budget/i)).toBeInTheDocument()
  })

  it('renders the message textarea with label and placeholder', () => {
    render(<ContactForm />)
    const textarea = screen.getByRole('textbox', { name: /message/i })
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveAttribute('placeholder', 'Your message here...')
  })

  it('renders the submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('submits the form and shows success state', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByRole('textbox', { name: /your name/i }), 'John')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'john@test.com')
    await user.selectOptions(screen.getByLabelText(/needed services/i), 'online-store')
    await user.selectOptions(screen.getByLabelText(/budget/i), '1000-5000')
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'Hello there!')

    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByText('Thank you!')).toBeInTheDocument()
    expect(screen.getByText(/your message has been sent/i)).toBeInTheDocument()
  })

  it('shows send another message button after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByRole('textbox', { name: /your name/i }), 'John')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'john@test.com')
    await user.selectOptions(screen.getByLabelText(/needed services/i), 'online-store')
    await user.selectOptions(screen.getByLabelText(/budget/i), '1000-5000')
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'Hi')

    await user.click(screen.getByRole('button', { name: /submit/i }))

    const resetButton = screen.getByRole('button', { name: /send another message/i })
    expect(resetButton).toBeInTheDocument()
  })

  it('resets the form when clicking send another message', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByRole('textbox', { name: /your name/i }), 'John')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'john@test.com')
    await user.selectOptions(screen.getByLabelText(/needed services/i), 'online-store')
    await user.selectOptions(screen.getByLabelText(/budget/i), '1000-5000')
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'Hi')

    await user.click(screen.getByRole('button', { name: /submit/i }))
    await user.click(screen.getByRole('button', { name: /send another message/i }))

    expect(screen.getByRole('heading', { name: /say hello/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /your name/i })).toHaveValue('')
  })

  it('has accessible form fields with correct labels', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Needed Services')).toBeInTheDocument()
    expect(screen.getByLabelText('Budget')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders form fields as required', () => {
    render(<ContactForm />)
    expect(screen.getByRole('textbox', { name: /your name/i })).toBeRequired()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeRequired()
    expect(screen.getByLabelText(/needed services/i)).toBeRequired()
    expect(screen.getByLabelText(/budget/i)).toBeRequired()
    expect(screen.getByRole('textbox', { name: /message/i })).toBeRequired()
  })
})
