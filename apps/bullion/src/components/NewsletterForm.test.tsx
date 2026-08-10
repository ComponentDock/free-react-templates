import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewsletterForm } from './NewsletterForm'
import {
  emailLabel,
  emailPlaceholder,
  invalidEmailMessage,
  newsletterBlurb,
  newsletterTitle,
  subscribeLabel,
  successMessage,
} from '../data'

describe('NewsletterForm', () => {
  it('renders the title, blurb, email input and accent submit button', () => {
    render(<NewsletterForm />)

    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(newsletterBlurb)).toBeInTheDocument()

    const input = screen.getByLabelText(emailLabel)
    expect(input).toHaveAttribute('placeholder', emailPlaceholder)
    expect(input).toHaveClass('border-accent', 'h-[45px]')

    const button = screen.getByRole('button', { name: subscribeLabel })
    expect(button).toHaveClass('bg-accent', 'h-[45px]', 'w-[45px]')
  })

  it('shows a validation error and no success message for an invalid email', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)

    await user.type(screen.getByLabelText(emailLabel), 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.getByRole('alert')).toHaveTextContent(invalidEmailMessage)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText(emailLabel)).toHaveAttribute('aria-invalid', 'true')
  })

  it('shows a success message and clears the input for a valid email', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)

    await user.type(screen.getByLabelText(emailLabel), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(successMessage)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByLabelText(emailLabel)).toHaveValue('')
  })

  it('recovers from an error once a valid email is submitted', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)

    const input = screen.getByLabelText(emailLabel)
    await user.type(input, 'broken')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.clear(input)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
