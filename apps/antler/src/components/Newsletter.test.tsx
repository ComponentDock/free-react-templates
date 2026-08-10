import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'
import {
  emailLabel,
  emailPlaceholder,
  invalidEmailMessage,
  newsletterHeading,
  subscribeButtonLabel,
  successMessage,
} from '../data'

describe('Newsletter', () => {
  it('renders the heading and the fused email input + Subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { name: newsletterHeading })).toBeInTheDocument()

    const input = screen.getByLabelText(emailLabel)
    expect(input).toHaveAttribute('placeholder', emailPlaceholder)
    expect(input).toHaveClass('rounded-l-[5px]', 'border-ink', 'text-accent')

    const button = screen.getByRole('button', { name: subscribeButtonLabel })
    expect(button).toHaveClass('bg-primary-600', 'rounded-r-[5px]')
  })

  it('shows a validation error and blocks submission for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText(emailLabel), 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.getByRole('alert')).toHaveTextContent(invalidEmailMessage)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText(emailLabel)).toHaveAttribute('aria-invalid', 'true')
  })

  it('shows a success message and clears the input for a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText(emailLabel), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(successMessage)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByLabelText(emailLabel)).toHaveValue('')
  })

  it('recovers from an error once a valid email is submitted', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText(emailLabel)
    await user.type(input, 'broken')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.clear(input)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
