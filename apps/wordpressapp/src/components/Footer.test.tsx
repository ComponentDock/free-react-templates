import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the link columns and copyright line', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()

    for (const link of ['Terms', 'Policy', 'Services']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()} WordpressApp`)),
    ).toBeInTheDocument()
  })

  it('shows social links for GitHub, X, and LinkedIn', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com',
    )
    expect(screen.getByRole('link', { name: 'X' })).toHaveAttribute('href', 'https://x.com')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com',
    )
  })

  it('resets the newsletter input after submitting', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByLabelText('Email address')).toHaveValue('')
  })
})
