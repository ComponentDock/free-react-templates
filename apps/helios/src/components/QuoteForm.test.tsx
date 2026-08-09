import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { QuoteForm } from './QuoteForm'

describe('QuoteForm', () => {
  it('renders the heading, all form fields, and the office-hours sidebar', () => {
    render(<QuoteForm />)
    expect(screen.getByRole('heading', { name: 'Get Your Free Quote' })).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Service')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit Request' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Office Hours' })).toBeInTheDocument()
    expect(screen.getByText('890 Solar Way, Austin, TX 78701')).toBeInTheDocument()
  })

  it('shows validation errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.click(screen.getByRole('button', { name: 'Submit Request' }))
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.getByText(/tell us a little about your project/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true')
  })

  it('shows an email error for an invalid address', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.type(screen.getByLabelText('Name'), 'Jane Smith')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Message'), 'I want to power my home.')
    await user.click(screen.getByRole('button', { name: 'Submit Request' }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('submits a valid form and shows the success confirmation', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.type(screen.getByLabelText('Name'), 'Jane Smith')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.selectOptions(screen.getByLabelText('Service'), 'Battery Storage')
    await user.type(screen.getByLabelText('Message'), 'I want to add storage to my new array.')
    await user.click(screen.getByRole('button', { name: 'Submit Request' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      /Thank you, Jane Smith! Your request has been received/i,
    )
  })
})
