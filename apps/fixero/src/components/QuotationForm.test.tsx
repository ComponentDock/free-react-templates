import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuotationForm } from './QuotationForm'

describe('QuotationForm', () => {
  it('renders the form heading', () => {
    render(<QuotationForm />)
    expect(screen.getByText('Get Quotation')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<QuotationForm />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows success message on submit', async () => {
    const user = userEvent.setup()
    render(<QuotationForm />)

    await user.type(screen.getByPlaceholderText('Name'), 'John')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })
})
