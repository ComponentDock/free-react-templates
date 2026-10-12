import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the newsletter block with a labelled field and subscribe button', () => {
    render(<Footer />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Join the Ecohive newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email')
    expect(screen.getByRole('button', { name: 'Subscribe' })).toHaveAttribute('type', 'submit')
  })

  it('confirms a valid signup and rejects an invalid address in the status region', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const field = screen.getByLabelText('Email address')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Enter your email address to subscribe.')

    await user.type(field, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Enter your email address to subscribe.')

    await user.clear(field)
    await user.type(field, 'nadia@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — we will keep nadia@example.com posted.',
    )
  })

  it('renders the wordmark, blurb and the three social links', () => {
    render(<Footer />)
    expect(screen.getByText('Ecohive')).toBeInTheDocument()
    expect(screen.getByText(/Ecohive runs renewable-powered hosting/)).toBeInTheDocument()
    for (const social of ['X', 'Facebook', 'Pinterest']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('renders the Company, Products and Support columns', () => {
    render(<Footer />)
    for (const link of [
      'About us',
      'Services',
      'Customer stories',
      'Blog',
      'Careers',
      'Shared Hosting',
      'Cloud Hosting',
      'WordPress Hosting',
      'VPS Hosting',
      'Email Hosting',
      'Help center',
      'Contact us',
      'Sign in',
      'Create account',
      'Domain search',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
    expect(screen.getByText('Copyright © 2026 Ecohive. All rights reserved.')).toBeInTheDocument()
  })
})
