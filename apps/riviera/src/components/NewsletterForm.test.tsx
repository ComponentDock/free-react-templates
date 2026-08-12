import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewsletterForm } from './NewsletterForm'

describe('NewsletterForm', () => {
  it('renders the email input and subscribe button', () => {
    render(<NewsletterForm />)
    expect(screen.getByPlaceholderText('Your Email Here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows an error for an empty email', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter your email')).toBeInTheDocument()
  })

  it('shows an error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)
    await user.type(screen.getByPlaceholderText('Your Email Here'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })

  it('confirms a valid subscription and resets the field', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)
    await user.type(screen.getByPlaceholderText('Your Email Here'), 'guest@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(/subscribed/i)
    expect(screen.getByPlaceholderText('Your Email Here')).toHaveValue('')
  })
})
