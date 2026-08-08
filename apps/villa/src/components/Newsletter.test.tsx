import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, blurb, email field and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: /Subscribe Us/i })).toBeInTheDocument()
    expect(screen.getByText(/We won't send any kind of spam/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument()
  })

  it('shows an error for an invalid email and does not subscribe', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Get Started/i }))
    expect(screen.getByRole('alert')).toHaveTextContent('valid email address')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows an error when the email is empty', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByRole('button', { name: /Get Started/i }))
    expect(screen.getByRole('alert')).toHaveTextContent('valid email address')
  })

  it('subscribes with a valid email and shows success, replacing the form', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'ada@example.com')
    await user.click(screen.getByRole('button', { name: /Get Started/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/i)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
