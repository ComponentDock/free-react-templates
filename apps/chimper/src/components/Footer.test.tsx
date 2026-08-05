import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about blurb, feature links, social links, newsletter form, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/Neque facere laudantium magnam/)).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 2, name: 'Features' })).toBeInTheDocument()
    for (const link of ['About Us', 'Services', 'Testimonials', 'Contact Us']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { level: 2, name: 'Follow Us' })).toBeInTheDocument()
    for (const social of ['Facebook', 'X', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()

    expect(
      screen.getByText(`Copyright © ${new Date().getFullYear()} Chimper. All rights reserved.`),
    ).toBeInTheDocument()
  })

  it('prevents the newsletter form from submitting a page reload', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('form', { name: 'Newsletter subscription' })).toBeInTheDocument()
  })
})
