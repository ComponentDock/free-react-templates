import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EmailSignup } from './EmailSignup'

describe('EmailSignup', () => {
  it('renders an email input', () => {
    render(<EmailSignup />)

    const input = screen.getByRole('textbox', { name: /email/i })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders a submit button with "NOTIFY US" text', () => {
    render(<EmailSignup />)

    const button = screen.getByRole('button', { name: /notify us/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('allows typing an email address', async () => {
    const user = userEvent.setup()
    render(<EmailSignup />)

    const input = screen.getByRole('textbox', { name: /email/i })
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits the form without error', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const user = userEvent.setup()
    render(<EmailSignup />)

    const input = screen.getByRole('textbox', { name: /email/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /notify us/i }))

    expect(consoleSpy).not.toHaveBeenCalled()
    consoleSpy.mockRestore()
  })

  it('has a form landmark with accessible name', () => {
    render(<EmailSignup />)

    expect(screen.getByRole('form', { name: /email signup/i })).toBeInTheDocument()
  })
})
