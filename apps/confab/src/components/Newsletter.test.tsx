import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('shows a validation error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('shows the success state for a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'designer@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))

    expect(screen.getByRole('status')).toHaveTextContent(/subscribed/i)
  })
})
