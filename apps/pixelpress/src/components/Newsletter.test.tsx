import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'
import {
  emailLabel,
  newsletterError,
  newsletterPlaceholder,
  newsletterSuccess,
  newsletterTitle,
  subscribeLabel,
} from '../data'

describe('Newsletter', () => {
  it('renders the heading, email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByLabelText(emailLabel)).toHaveAttribute('placeholder', newsletterPlaceholder)
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()
  })

  it('shows a validation error for an invalid email and does not submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(emailLabel)
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletterError)
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a success confirmation for a valid email and unmounts the form', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText(emailLabel), 'player@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(screen.queryByLabelText(emailLabel)).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
