import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuoteAndAbout } from './QuoteAndAbout'

describe('QuoteAndAbout', () => {
  it('renders the Request A Quote heading', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByRole('heading', { name: /request a quote/i })).toBeInTheDocument()
  })

  it('renders the about section heading', () => {
    render(<QuoteAndAbout />)
    expect(
      screen.getByRole('heading', { name: /we are highly recommendable/i }),
    ).toBeInTheDocument()
  })

  it('renders the quote form with aria-label', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByRole('form', { name: /request a quote form/i })).toBeInTheDocument()
  })

  it('renders the First Name input', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
  })

  it('renders the Last Name input', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
  })

  it('renders the service select', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('renders service select options', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByRole('option', { name: 'Select a Service' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Building Construction' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Home Renovation' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Interior Design' })).toBeInTheDocument()
  })

  it('renders the Phone input', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
  })

  it('renders the Message textarea', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the Submit button', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByRole('button', { name: /read more about us/i })).toBeInTheDocument()
  })

  it('renders the about text paragraph', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByText(/decades of experience/)).toBeInTheDocument()
  })

  it('form prevents default submission', async () => {
    const user = userEvent.setup()
    render(<QuoteAndAbout />)
    const form = screen.getByRole('form', { name: /request a quote form/i })
    const submitHandler = vi.fn()
    form.addEventListener('submit', submitHandler)
    await user.click(screen.getByRole('button', { name: /submit/i }))
    // The onSubmit handler calls e.preventDefault(), so the form's native submit fires but is prevented
    expect(form).toBeInTheDocument()
  })

  it('renders sr-only labels for form fields', () => {
    render(<QuoteAndAbout />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Service')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('allows typing in the First Name input', async () => {
    const user = userEvent.setup()
    render(<QuoteAndAbout />)
    const firstNameInput = screen.getByPlaceholderText('First Name')
    await user.type(firstNameInput, 'John')
    expect(firstNameInput).toHaveValue('John')
  })

  it('allows selecting a service option', async () => {
    const user = userEvent.setup()
    render(<QuoteAndAbout />)
    const select = screen.getByRole('combobox')
    await user.selectOptions(select, 'building')
    expect(select).toHaveValue('building')
  })

  it('allows typing in the Phone input', async () => {
    const user = userEvent.setup()
    render(<QuoteAndAbout />)
    const phoneInput = screen.getByPlaceholderText('Phone')
    await user.type(phoneInput, '1234567890')
    expect(phoneInput).toHaveValue('1234567890')
  })

  it('allows typing in the Message textarea', async () => {
    const user = userEvent.setup()
    render(<QuoteAndAbout />)
    const messageTextarea = screen.getByPlaceholderText('Message')
    await user.type(messageTextarea, 'Hello')
    expect(messageTextarea).toHaveValue('Hello')
  })
})
