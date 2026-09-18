import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the Contact Us heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders the full name input', () => {
    render(<ContactForm />)
    const input = screen.getByRole('textbox', { name: /full name/i })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders the email input', () => {
    render(<ContactForm />)
    const input = screen.getByRole('textbox', { name: /email/i })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders the phone input', () => {
    render(<ContactForm />)
    const input = screen.getByRole('textbox', { name: /phone/i })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'tel')
  })

  it('renders the services dropdown', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/needed services/i)).toBeInTheDocument()
  })

  it('renders the product type radio group', () => {
    render(<ContactForm />)
    expect(screen.getByText(/what type of products do you sell\?/i)).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /physical products/i })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /digital products/i })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /services consulting/i })).toBeInTheDocument()
  })

  it('renders the budget slider', () => {
    render(<ContactForm />)
    const slider = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
    expect(slider).toHaveAttribute('type', 'range')
  })

  it('renders the message textarea', () => {
    render(<ContactForm />)
    const textarea = screen.getByRole('textbox', { name: /message/i })
    expect(textarea).toBeInTheDocument()
    expect(textarea.tagName).toBe('TEXTAREA')
  })

  it('renders the submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByText('Please Type Your Name')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Please select a service')).toBeInTheDocument()
    expect(screen.getByText('Please select a product type')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('shows email validation error for invalid email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByRole('textbox', { name: /full name/i }), 'John')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'notanemail')
    await user.selectOptions(screen.getByLabelText(/needed services/i), 'ecommerce')
    await user.click(screen.getByRole('radio', { name: /physical products/i }))
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'Hello')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByText('Invalid email address')).toBeInTheDocument()
  })

  it('clears validation error when user starts typing', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('Please Type Your Name')).toBeInTheDocument()

    await user.type(screen.getByRole('textbox', { name: /full name/i }), 'J')
    expect(screen.queryByText('Please Type Your Name')).not.toBeInTheDocument()
  })

  it('submits the form successfully with valid data', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByRole('textbox', { name: /full name/i }), 'John Doe')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'john@example.com')
    await user.type(screen.getByRole('textbox', { name: /phone/i }), '555-1234')
    await user.selectOptions(screen.getByLabelText(/needed services/i), 'ecommerce')
    await user.click(screen.getByRole('radio', { name: /physical products/i }))
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'Hello there!')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByText('Thank you!')).toBeInTheDocument()
    expect(screen.getByText(/your message has been sent/i)).toBeInTheDocument()
  })

  it('shows send another message button after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByRole('textbox', { name: /full name/i }), 'John')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'john@test.com')
    await user.selectOptions(screen.getByLabelText(/needed services/i), 'ecommerce')
    await user.click(screen.getByRole('radio', { name: /physical products/i }))
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'Hi')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByRole('button', { name: /send another message/i })).toBeInTheDocument()
  })

  it('resets the form when clicking send another message', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByRole('textbox', { name: /full name/i }), 'John')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'john@test.com')
    await user.selectOptions(screen.getByLabelText(/needed services/i), 'ecommerce')
    await user.click(screen.getByRole('radio', { name: /physical products/i }))
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'Hi')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    await user.click(screen.getByRole('button', { name: /send another message/i }))

    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /full name/i })).toHaveValue('')
  })

  it('allows changing the budget slider', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const slider = screen.getByRole('slider')
    await user.click(slider)
    // Simulate changing the value via fireEvent for range inputs
    // (userEvent doesn't support range inputs directly)
    const { fireEvent } = await import('@testing-library/react')
    fireEvent.change(slider, { target: { value: '5000' } })

    expect(slider).toHaveValue('5000')
  })

  it('renders required fields as required', () => {
    render(<ContactForm />)
    expect(screen.getByRole('textbox', { name: /full name/i })).toBeRequired()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeRequired()
    expect(screen.getByLabelText(/needed services/i)).toBeRequired()
  })

  it('renders form field labels', () => {
    render(<ContactForm />)
    expect(screen.getByText('FULL NAME')).toBeInTheDocument()
    expect(screen.getByText('EMAIL')).toBeInTheDocument()
    expect(screen.getByText('PHONE')).toBeInTheDocument()
    expect(screen.getByText('NEEDED SERVICES')).toBeInTheDocument()
    expect(screen.getByText('BUDGET')).toBeInTheDocument()
    expect(screen.getByText('MESSAGE')).toBeInTheDocument()
  })

  it('shows asterisks for required field labels', () => {
    render(<ContactForm />)
    const nameLabel = screen.getByText('FULL NAME')
    expect(nameLabel.textContent).toContain('*')
  })

  it('displays initial budget value', () => {
    render(<ContactForm />)
    expect(screen.getByText(/\$2,500/)).toBeInTheDocument()
  })

  it('renders message textarea with placeholder', () => {
    render(<ContactForm />)
    const textarea = screen.getByRole('textbox', { name: /message/i })
    expect(textarea).toHaveAttribute('placeholder', 'Your message here...')
  })
})
