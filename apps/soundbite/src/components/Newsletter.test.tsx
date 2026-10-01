import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the gradient banner heading and subscriber note', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Never Miss an Episode' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Weekly episode summaries/)).toBeInTheDocument()
    expect(screen.getByText(/Join 50,000\+ subscribers/)).toBeInTheDocument()
  })

  it('shows an error when submitting an empty email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter your email address')
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows an error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
  })

  it('subscribes with a valid email and shows the status message', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'listener@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/)
    expect(screen.queryByRole('button', { name: 'Subscribe' })).toBeNull()
  })
})
