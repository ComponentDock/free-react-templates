import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the section heading', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { level: 2, name: /subscribe to our newsletter/i }),
    ).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows typing an email address', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('shows confirmation after subscription', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(screen.getByRole('status')).toHaveTextContent(/thank you/i)
  })

  it('does not show confirmation when email is empty after trim', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    // Type whitespace only — trim() makes it falsy
    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, '   ')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('has proper aria-label', () => {
    render(<Newsletter />)
    expect(screen.getByRole('region', { name: /newsletter subscription/i })).toBeInTheDocument()
  })

  it('has sr-only label for email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText(/email address/i)).toHaveAttribute('type', 'email')
  })
})
