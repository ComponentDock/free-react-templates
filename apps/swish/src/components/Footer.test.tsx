import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the five footer columns and copyright', () => {
    render(<Footer />)

    for (const title of ['Top Products', 'Quick Links', 'Features', 'Resources', 'Newsletter']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/© 2026 Swish/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Swish on Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Swish on Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Swish on Twitter' })).toBeInTheDocument()
  })

  it('shows an error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /subscribe/ }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a success confirmation for a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'fan@swish.example')
    await user.click(screen.getByRole('button', { name: /subscribe/ }))

    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/i)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
