import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Venue } from './Venue'

describe('Venue', () => {
  it('renders the heading, eyebrow and venue details', () => {
    render(<Venue />)
    expect(screen.getByText('The Location')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Event Venue' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Moscone Center' })).toBeInTheDocument()
    expect(screen.getByText(/747 Howard Street/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Directions' })).toBeInTheDocument()
  })

  it('lists all six venue features', () => {
    render(<Venue />)
    for (const feature of [
      'State-of-the-art AV equipment',
      'High-speed WiFi throughout',
      'Multiple breakout rooms',
      'On-site catering',
      'Accessible facilities',
      'Public transit accessible',
    ]) {
      expect(screen.getByText(feature)).toBeInTheDocument()
    }
  })

  it('shows recommended hotels with distances and the promo code note', () => {
    render(<Venue />)
    expect(screen.getByRole('heading', { name: 'Recommended Hotels' })).toBeInTheDocument()
    for (const hotel of [
      'The St. Regis San Francisco',
      'San Francisco Marriott Marquis',
      'Hotel Vitale',
    ]) {
      expect(screen.getByText(hotel)).toBeInTheDocument()
    }
    expect(screen.getByText(/0\.2 miles/)).toBeInTheDocument()
    expect(screen.getByText(/TECHSUMMIT32/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get directions/i })).toBeInTheDocument()
  })
})
