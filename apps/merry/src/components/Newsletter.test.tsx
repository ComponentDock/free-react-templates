import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the section heading', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2, name: /stay in the loop/i })).toBeInTheDocument()
  })

  it('renders the email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('shows error when submitting empty email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/enter your email/i)
  })

  it('shows error when submitting invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('shows success message on valid email submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument()
  })

  it('clears error when user starts typing', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    await user.type(screen.getByLabelText(/email address/i), 't')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('has the correct section id', () => {
    const { container } = render(<Newsletter />)
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })
})
