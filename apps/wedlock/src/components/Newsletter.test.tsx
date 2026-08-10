import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading on the dark band', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe for the updates!' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('shows an error for an invalid email and does not submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText(/email address/i), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a success message for a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText(/email address/i), 'bride@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/thank you/i)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
