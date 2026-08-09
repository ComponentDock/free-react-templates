import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the gradient newsletter card with heading, input, and button', () => {
    render(<Newsletter />)

    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Never Miss an Episode' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/get weekly episode summaries/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByText(/join 50,000\+ subscribers/i)).toBeInTheDocument()
  })

  it('shows a success confirmation after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'listener@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(/on the list/i)
  })

  it('shows an error for an invalid email and does not submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
