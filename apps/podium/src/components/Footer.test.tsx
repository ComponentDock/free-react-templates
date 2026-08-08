import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb and social icon links', () => {
    render(<Footer />)
    expect(screen.getByText('Podium')).toBeInTheDocument()
    expect(screen.getByText(/three days of inspiring talks/i)).toBeInTheDocument()

    for (const label of ['X', 'LinkedIn', 'GitHub', 'YouTube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Event and Resources link columns', () => {
    render(<Footer />)
    for (const link of ['Speakers', 'Schedule', 'Tickets', 'Sponsors', 'Venue']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const link of [
      'Code of Conduct',
      'Press Kit',
      'Become a Sponsor',
      'Call for Speakers',
      'FAQ',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders contact details and the copyright bar with legal links', () => {
    render(<Footer />)
    expect(screen.getByText('info@podium.example')).toBeInTheDocument()
    expect(screen.getAllByText(/Moscone Center/).length).toBeGreaterThan(0)
    expect(screen.getByText(/© 2026 Podium\. All rights reserved\./)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })
})
