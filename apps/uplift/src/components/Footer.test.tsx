import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand, blurb and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Uplift home/ })).toBeInTheDocument()
    expect(screen.getByText(/Empowering communities through education/)).toBeInTheDocument()

    for (const label of ['Facebook', 'Instagram', 'Twitter']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows the three link columns', () => {
    render(<Footer />)

    for (const heading of ['Programs', 'Organization', 'Support']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    for (const link of [
      'Education',
      'Healthcare',
      'Economic Empowerment',
      'Environment',
      'About Us',
      'Our Team',
      'Annual Report',
      'Press',
      'Donate',
      'Volunteer',
      'Contact Us',
      'FAQ',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows the newsletter form and confirms a subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Stay Updated' })).toBeInTheDocument()

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'friend@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Subscribe' })).not.toBeInTheDocument()
  })

  it('shows the copyright and cookie notice', () => {
    render(<Footer />)

    expect(screen.getByText(/Uplift Foundation. All rights reserved/)).toBeInTheDocument()
    expect(screen.getByText(/We use cookies to improve your experience/)).toBeInTheDocument()
  })
})
