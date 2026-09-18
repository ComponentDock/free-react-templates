import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuoteForm } from './QuoteForm'

describe('QuoteForm', () => {
  it('renders the form heading', () => {
    render(<QuoteForm />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Request An Estimate/i }),
    ).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<QuoteForm />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/service/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<QuoteForm />)
    expect(screen.getByRole('button', { name: /Request A Quote/i })).toBeInTheDocument()
  })

  it('handles form input changes', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/phone/i), '555-1234')
    await user.selectOptions(screen.getByLabelText(/service/i), 'garden-water-system')
    await user.type(screen.getByLabelText(/message/i), 'Test message')
    expect(screen.getByLabelText(/first name/i)).toHaveValue('John')
  })

  it('handles form submission', () => {
    render(<QuoteForm />)
    const form = screen.getByRole('button', { name: /Request A Quote/i }).closest('form')!
    fireEvent.submit(form)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
  })
})
