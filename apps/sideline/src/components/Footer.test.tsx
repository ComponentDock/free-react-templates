import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four dark columns with their headings', () => {
    render(<Footer />)
    for (const heading of [
      'About Sideline',
      'Recent Blog',
      'Quick Menu',
      'Follow Us',
      'Subscribe Newsletter',
    ]) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    expect(screen.getByText(/independent sports desk covering clubs/i)).toBeInTheDocument()
  })

  it('lists the quick menu items and social links', () => {
    render(<Footer />)
    for (const label of [
      'Home',
      'Matches',
      'News',
      'Team',
      'About Us',
      'Privacy Policy',
      'Contact Us',
      'Membership',
    ]) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    for (const label of ['Facebook', 'Instagram', 'Twitter', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows the Component Dock attribution in the bottom bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: /Component Dock/ })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('rejects an invalid newsletter email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    // The input stays mounted while the error shows.
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('replaces the form with a success message for a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'fan@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing')
    // Form unmounts on success — the input is gone.
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
