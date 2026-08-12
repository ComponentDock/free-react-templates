import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows brand, about text, link columns, payment badges and social links', () => {
    render(<Footer />)

    expect(screen.getByText('Atelier')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Account' })).toBeInTheDocument()

    for (const method of ['Visa', 'Mastercard', 'Google Pay', 'PayPal', 'Apple Pay', 'Stripe']) {
      expect(screen.getByText(method)).toBeInTheDocument()
    }
    for (const label of ['Facebook', 'X', 'LinkedIn', 'Instagram', 'Skype']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByText(/© \d{4} Atelier\. All rights reserved\./)).toBeInTheDocument()
  })

  it('validates the newsletter email and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')

    await user.clear(input)
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })
})
