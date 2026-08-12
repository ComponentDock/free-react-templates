import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name and link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Arena home/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Important Link' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByText('WHMCS-bridge')).toBeInTheDocument()
    expect(screen.getByText('Phone: +8880 44338899')).toBeInTheDocument()
  })

  it('shows a newsletter form and a copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
  })

  it('shows a success message and removes the input on a valid submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'player@arena.gg')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/i)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('shows an error message for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })
})
