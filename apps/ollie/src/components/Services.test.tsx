import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'What We Offer' })).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)

    const titles = [
      'Gear Reviews',
      'Spot Guides',
      'Video Production',
      'Competition Coaching',
      'Community Events',
      'Skill Workshops',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/In-depth reviews of skateboarding gear/)).toBeInTheDocument()
    expect(screen.getByText(/Discover the best skate spots/)).toBeInTheDocument()
    expect(screen.getByText(/Professional skate video editing/)).toBeInTheDocument()
  })
})
