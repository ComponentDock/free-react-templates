import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the mini newsletter block with 15% off copy and a Subscribe control', () => {
    render(<Footer />)
    expect(screen.getByText('Join Our Newsletter')).toBeInTheDocument()
    expect(screen.getByText(/Get 15% off your first order/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('validates the mini newsletter email and shows a success state', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: 'Footer email address' })
    await user.type(input, 'nope')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument()
    await user.clear(input)
    await user.type(input, 'fan@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
  })

  it('renders the brand blurb and three link columns', () => {
    render(<Footer />)
    expect(screen.getByText(/Discover curated collections of premium fashion/i)).toBeInTheDocument()
    for (const column of ['Shop', 'Help', 'About']) {
      expect(screen.getByRole('heading', { level: 3, name: column })).toBeInTheDocument()
    }
    for (const link of [
      'Clothing',
      'Accessories',
      'Footwear',
      'Bags',
      'Jewelry',
      'Sale',
      'FAQ',
      'Shipping & Returns',
      'Size Guide',
      'Contact Us',
      'Track Order',
      'Our Story',
      'Sustainability',
      'Careers',
      'Press',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the bottom bar with copyright, legal links, and payment chips', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Moda\. All rights reserved\./)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms' })).toBeInTheDocument()
    expect(screen.getByText('VISA')).toBeInTheDocument()
    expect(screen.getByText('AMEX')).toBeInTheDocument()
    expect(screen.getByText('Mastercard')).toBeInTheDocument()
  })
})
