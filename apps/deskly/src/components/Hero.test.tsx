import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, blurb and call-to-action buttons', () => {
    render(<Hero />)

    expect(screen.getByText(/Austin's Premier Coworking Space/)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Where Great Work Happens Together/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book a Free Tour' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Plans' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Watch Demo/ })).toBeInTheDocument()
  })

  it('renders the stats row with four statistics', () => {
    render(<Hero />)

    for (const stat of ['500+', '3', '95%', '4.9']) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }
    for (const label of ['Members', 'Locations', 'Occupancy', 'Google Rating']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('renders an interior photo with descriptive alt text', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /coworking interior/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/deskly-hero'))
  })
})
