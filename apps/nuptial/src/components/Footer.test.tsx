import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand, blurb, and link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /nuptial home/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    for (const quick of ['Wellness', 'Vintge stores', 'Trekking', 'Tour', 'Sightseeing']) {
      expect(screen.getByText(quick)).toBeInTheDocument()
    }
    for (const link of [
      'Home',
      'Groom & Bride',
      'Story',
      'Greetings',
      'People',
      'Where & When',
      'RSVP',
      'Gallery',
    ]) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }
    for (const service of ['Organizer', 'Venue', 'Wedding Ceremony', 'Accommodation']) {
      expect(screen.getByText(service)).toBeInTheDocument()
    }
  })

  it('shows contact details and social links', () => {
    render(<Footer />)
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('links to Component Dock in the bottom bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: /component dock/i })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
