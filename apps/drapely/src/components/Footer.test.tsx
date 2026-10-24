import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the promo block copy', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Promo' })).toBeInTheDocument()
    expect(screen.getByText('Finding Your Perfect Shirts This Summer')).toBeInTheDocument()
    expect(screen.getByText('Promo from July 15 — 25, 2019')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Summer shirt promo' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/drapely-promo-shirt/600/400',
    )
  })

  it('renders ten quick links across three columns', () => {
    render(<Footer />)

    const quickLinks = screen.getByRole('navigation', { name: 'Quick Links' })
    expect(within(quickLinks).getAllByRole('link')).toHaveLength(10)
    expect(within(quickLinks).getByRole('link', { name: 'Store builder' })).toBeInTheDocument()
    expect(within(quickLinks).getByRole('link', { name: 'Software' })).toBeInTheDocument()
  })

  it('renders the contact block with a telephone link', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+2 392 3929 210' })).toHaveAttribute(
      'href',
      'tel:+23923929210',
    )
    expect(screen.getByText('hello@drapely.store')).toBeInTheDocument()
  })

  it('replaces the subscribe form with a confirmation after submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email'), 'shopper@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.queryByLabelText('Email')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks for subscribing — new arrivals are on their way.',
    )
  })

  it('credits Component Dock in the copyright line', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
