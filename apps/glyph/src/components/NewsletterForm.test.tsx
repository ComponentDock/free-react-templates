import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewsletterForm } from './NewsletterForm'

describe('NewsletterForm', () => {
  it('renders an email input and a black Subscribe button (sidebar variant)', () => {
    render(<NewsletterForm variant="sidebar" />)

    const input = screen.getByRole('textbox', { name: 'Email address' })
    expect(input).toHaveAttribute('placeholder', 'Email Address')

    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button.className).toContain('bg-black')
  })

  it('shows a validation error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm variant="sidebar" />)

    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.getByRole('textbox', { name: 'Email address' })).toHaveAttribute(
      'aria-invalid',
      'true',
    )
  })

  it('shows a success state and clears the input for a valid email', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm variant="sidebar" />)

    const input = screen.getByRole('textbox', { name: 'Email address' })
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks for subscribing! Please check your inbox.',
    )
    expect(input).toHaveValue('')
  })

  it('renders the footer variant with an accent icon-only button', () => {
    render(<NewsletterForm variant="footer" />)

    const input = screen.getByRole('textbox', { name: 'Email address' })
    expect(input.className).toContain('bg-foot-input')

    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button.className).toContain('rounded-none')
    expect(button.className).not.toContain('bg-black')
  })

  it('recovers from an error to a success state on the next valid submit', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm variant="sidebar" />)

    const input = screen.getByRole('textbox', { name: 'Email address' })
    await user.type(input, 'broken')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.clear(input)
    await user.type(input, 'ok@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
