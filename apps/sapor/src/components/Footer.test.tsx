import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand blurb, contact details and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Sapor home' })).toBeInTheDocument()
    expect(screen.getByText(/Authentic Italian cuisine crafted with love/)).toBeInTheDocument()
    expect(screen.getByText('(555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('reservations@sapor.com')).toBeInTheDocument()
    expect(screen.getByText(/123 Main Street/)).toBeInTheDocument()

    for (const social of ['Facebook', 'Instagram', 'YouTube']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('shows Quick Links and the weekly Hours schedule', () => {
    render(<Footer />)

    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    for (const label of ['Home', 'Menu', 'About', 'Gallery', 'Reservations']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByText('Hours')).toBeInTheDocument()
    for (const day of ['Monday', 'Friday', 'Saturday', 'Sunday']) {
      expect(screen.getByText(day)).toBeInTheDocument()
    }
    expect(screen.getAllByText('5:00 PM – 10:00 PM').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('12:00 PM – 11:00 PM')).toBeInTheDocument()
  })

  it('does not subscribe when the email is empty', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByText('Thanks for subscribing!')).not.toBeInTheDocument()
  })

  it('subscribes with an email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'diner@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })

  it('shows the copyright bar with legal links', () => {
    render(<Footer />)

    expect(screen.getByText('© 2026 Sapor. All rights reserved.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })
})
