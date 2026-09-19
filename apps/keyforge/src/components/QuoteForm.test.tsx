import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuoteForm } from './QuoteForm'

describe('QuoteForm', () => {
  it('renders the heading', () => {
    render(<QuoteForm />)
    expect(screen.getByRole('heading', { name: 'Get a Quote' })).toBeInTheDocument()
  })

  it('renders name input', () => {
    render(<QuoteForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('renders phone input', () => {
    render(<QuoteForm />)
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
  })

  it('renders services dropdown', () => {
    render(<QuoteForm />)
    expect(screen.getByLabelText('Services')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<QuoteForm />)
    expect(screen.getByRole('button', { name: /get a quote/i })).toBeInTheDocument()
  })

  it('allows typing in name field', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.type(screen.getByLabelText('Name'), 'John')
    expect(screen.getByLabelText('Name')).toHaveValue('John')
  })

  it('allows selecting a service', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.selectOptions(screen.getByLabelText('Services'), 'locksmith')
    expect(screen.getByLabelText('Services')).toHaveValue('locksmith')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.type(screen.getByLabelText('Name'), 'Jane')
    await user.type(screen.getByLabelText('Phone'), '555-1234')
    await user.click(screen.getByRole('button', { name: /get a quote/i }))
    expect(screen.getByLabelText('Name')).toHaveValue('Jane')
  })
})
