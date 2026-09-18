import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FreeQuote } from './FreeQuote'

describe('FreeQuote', () => {
  it('renders the heading', () => {
    render(<FreeQuote />)
    expect(screen.getByText('Get A')).toBeInTheDocument()
    expect(screen.getByText('Free Quote')).toBeInTheDocument()
  })

  it('has name, email, and message fields', () => {
    render(<FreeQuote />)
    expect(screen.getByPlaceholderText('Your name *')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email address *')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your message *')).toBeInTheDocument()
  })

  it('has a submit button', () => {
    render(<FreeQuote />)
    expect(screen.getByRole('button', { name: 'Get a quote now' })).toBeInTheDocument()
  })

  it('clears the form on submit', async () => {
    const user = userEvent.setup()
    render(<FreeQuote />)

    await user.type(screen.getByPlaceholderText('Your name *'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Your email address *'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your message *'), 'Need a quote')

    await user.click(screen.getByRole('button', { name: 'Get a quote now' }))

    expect(screen.getByPlaceholderText('Your name *')).toHaveValue('')
    expect(screen.getByPlaceholderText('Your email address *')).toHaveValue('')
    expect(screen.getByPlaceholderText('Your message *')).toHaveValue('')
  })

  it('displays a hero image', () => {
    render(<FreeQuote />)
    expect(screen.getByAltText('Dental clinic interior')).toBeInTheDocument()
  })
})
