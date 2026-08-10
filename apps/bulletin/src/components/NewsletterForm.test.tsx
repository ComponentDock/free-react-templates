import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewsletterForm } from './NewsletterForm'
import {
  emailLabel,
  invalidEmailMessage,
  newsletterBlurb,
  newsletterTitle,
  subscribeLabel,
  successMessage,
} from '../data'

describe('NewsletterForm', () => {
  it('shows the widget title, blurb, input and subscribe button', () => {
    render(<NewsletterForm />)

    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(newsletterBlurb)).toBeInTheDocument()
    expect(screen.getByLabelText(emailLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()
  })

  it('rejects an invalid email with a per-field error that clears on typing', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)

    const input = screen.getByLabelText(emailLabel)
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.getByRole('alert')).toHaveTextContent(invalidEmailMessage)
    expect(input).toHaveAttribute('aria-invalid', 'true')

    await user.type(input, 'a')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(input).not.toHaveAttribute('aria-invalid')
  })

  it('shows the success message and clears the input on a valid submit', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)

    const input = screen.getByLabelText(emailLabel)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(successMessage)
    expect(input).toHaveValue('')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
