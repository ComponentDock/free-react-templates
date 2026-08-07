import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the link columns, newsletter form, and copyright line', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe Newsletter' })).toBeInTheDocument()

    for (const link of ['Terms', 'Policy', 'Services', 'Testimonials']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()

    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()} Boost`)),
    ).toBeInTheDocument()
  })

  it('shows social links for the brand icons', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com',
    )
    expect(screen.getByRole('link', { name: 'Dribbble' })).toHaveAttribute(
      'href',
      'https://dribbble.com',
    )
    expect(screen.getByRole('link', { name: 'Behance' })).toHaveAttribute(
      'href',
      'https://behance.net',
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
