import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the section heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Stay Updated')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Get the latest travel inspiration/i)).toBeInTheDocument()
  })

  it('renders email input field', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('shows error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'invalid-email')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/valid email address/i)
    })
  })

  it('clears error status when user types after error', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'invalid-email')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    // Typing after error should reset status to idle (clear the error)
    await user.type(input, 'x')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows loading state during submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(screen.getByRole('button', { name: /subscribing/i })).toBeInTheDocument()
  })

  it('shows success state after valid submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /subscribed/i })).toBeInTheDocument()
    })
  })

  it('disables input and button after successful submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    await waitFor(() => {
      expect(input).toBeDisabled()
      expect(screen.getByRole('button', { name: /subscribed/i })).toBeDisabled()
    })
  })

  it('renders privacy policy link', () => {
    render(<Newsletter />)
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
  })
})
