import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders border lines, heading, sub-line, email input, and Subscribe button', () => {
    const { container } = render(<Newsletter />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe to our Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(container.querySelectorAll('[data-border-line]').length).toBe(2)
  })

  it('shows a success state after submitting a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('rejects an invalid email with an error message', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })
})
