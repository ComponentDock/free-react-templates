import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewsletterForm } from './NewsletterForm'
import {
  newsletterTitle,
  newsletterPlaceholder,
  subscribeLabel,
  invalidEmailMessage,
  successMessage,
} from '../data'

describe('NewsletterForm', () => {
  it('renders the newsletter form with heading and input', () => {
    render(<NewsletterForm />)
    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(newsletterPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()
  })

  it('shows validation error for invalid email', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)

    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByText(invalidEmailMessage)).toBeInTheDocument()
  })

  it('shows success message for valid email', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)

    await user.type(screen.getByPlaceholderText(newsletterPlaceholder), 'test@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByText(successMessage)).toBeInTheDocument()
  })
})
