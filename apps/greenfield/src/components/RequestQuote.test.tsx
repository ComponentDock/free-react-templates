import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RequestQuote } from './RequestQuote'

describe('RequestQuote', () => {
  it('renders form heading', () => {
    render(<RequestQuote />)
    expect(screen.getByText('Request A Quote')).toBeInTheDocument()
  })

  it('renders form inputs', () => {
    render(<RequestQuote />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders service dropdown', () => {
    render(<RequestQuote />)
    const select = screen.getByDisplayValue('Select a Service')
    expect(select).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<RequestQuote />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders FAQ heading', () => {
    render(<RequestQuote />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('toggles FAQ items', async () => {
    const user = userEvent.setup()
    render(<RequestQuote />)
    const firstQuestion = screen.getByRole('button', { name: /what services do you offer/i })
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')
    await user.click(firstQuestion)
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/We offer a wide range/)).toBeInTheDocument()
    await user.click(firstQuestion)
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<RequestQuote />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
  })
})
