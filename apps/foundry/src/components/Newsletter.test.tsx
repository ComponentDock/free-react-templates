import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, email input, and Subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { name: /Sign up for a Newsletter/ })).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/ })).toBeInTheDocument()
  })

  it('shows an error for an invalid email and blocks submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText(/email/i), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('confirms a successful subscription for a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText(/email/i), 'hello@foundry.dev')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))

    expect(screen.getByRole('status')).toHaveTextContent(/subscribed/i)
    expect(screen.getByLabelText(/email/i)).toHaveValue('')
  })
})
