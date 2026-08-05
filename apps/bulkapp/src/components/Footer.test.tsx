import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the link columns, newsletter form, Instagram feed, social links, and copyright bar', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Top Products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Instagram Feed' })).toBeInTheDocument()

    for (const link of [
      'Managed Website',
      'Manage Reputation',
      'Power Tools',
      'Marketing Service',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(screen.getByText(/only send promo offers, not a single spam/)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe to the newsletter' })).toBeInTheDocument()

    for (let index = 1; index <= 6; index += 1) {
      expect(screen.getByRole('img', { name: `Instagram post ${index}` })).toBeInTheDocument()
    }

    for (const social of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    expect(
      screen.getByText(`Copyright © ${new Date().getFullYear()} BulkApp. All rights reserved.`),
    ).toBeInTheDocument()
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })

  it('prevents the newsletter form from submitting a page reload', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe to the newsletter' }))

    expect(screen.getByRole('form', { name: 'Newsletter subscription' })).toBeInTheDocument()
  })
})
