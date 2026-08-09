import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the about blurb, contact details, and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact us' })).toBeInTheDocument()
    expect(screen.getByText(/Los angeles, United States/)).toBeInTheDocument()
    expect(screen.getByText('+44 6532 986 652')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('shows the newsletter form', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email Address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/ })).toBeInTheDocument()
  })

  it('validates the newsletter email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: /Subscribe/ }))
    expect(screen.getByText('A valid email address is required.')).toBeInTheDocument()
  })

  it('subscribes with a valid email and shows a confirmation', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Your Email Address'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))

    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
    expect(screen.queryByLabelText('Your Email Address')).not.toBeInTheDocument()
  })

  it('renders the copyright bar with the site name', () => {
    render(<Footer />)

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByText(/All rights reserved \| Stylely/)).toBeInTheDocument()
  })
})
