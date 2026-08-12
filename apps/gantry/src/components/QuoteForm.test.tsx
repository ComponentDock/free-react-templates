import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuoteForm } from './QuoteForm'

describe('QuoteForm', () => {
  it('shows the heading and all form fields with a full-width submit', () => {
    render(<QuoteForm />)

    const section = screen.getByRole('region', { name: 'Get A Quote' })
    expect(within(section).getByRole('heading', { name: 'Request A Quote' })).toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone number')).toBeInTheDocument()
    expect(screen.getByLabelText('Your email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows a success message after submitting a valid quote request', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)

    await user.type(screen.getByLabelText('Your name'), 'Alex Builder')
    await user.type(screen.getByLabelText('Your email'), 'alex@example.com')
    await user.type(screen.getByLabelText('Message'), 'I need a warehouse built.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent(/thank you/i)
    expect(screen.queryByLabelText('Your name')).not.toBeInTheDocument()
  })
})
