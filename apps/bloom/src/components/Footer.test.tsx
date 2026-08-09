import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the blurb, contact details, hours, and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Have A Questions?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Spa Center' })).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@bloombeauty.com')).toBeInTheDocument()
    expect(screen.getByText(/08:00am — 09:00pm/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('lists the spa services', () => {
    render(<Footer />)

    for (const service of ['Body Care', 'Massage', 'Hydrotherapy', 'Yoga', 'Sauna', 'Aquazone']) {
      expect(screen.getByText(service)).toBeInTheDocument()
    }
  })

  it('renders the copyright bar with the site name', () => {
    render(<Footer />)

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByText(/All rights reserved \| Bloom/)).toBeInTheDocument()
  })
})
