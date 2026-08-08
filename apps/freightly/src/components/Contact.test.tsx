import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, four info cards and the message form', () => {
    render(<Contact />)
    expect(
      screen.getByRole('heading', { name: "Let's Discuss Your Shipping Needs" }),
    ).toBeInTheDocument()
    for (const card of ['Phone', 'Email', 'Headquarters', 'Business Hours']) {
      expect(screen.getByRole('heading', { name: card })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Send us a message' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('blocks submit with per-field errors when the form is invalid', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a message.')).toBeInTheDocument()
    expect(screen.queryByText(/Message sent/)).not.toBeInTheDocument()
  })

  it('shows a success message after a valid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Message'), 'We need a quote for ocean freight.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText(/Message sent/)).toBeInTheDocument()
    expect(screen.getByText(/Jane Doe/)).toBeInTheDocument()
  })
})
