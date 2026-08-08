import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, blurb and CTAs', () => {
    render(<Hero />)
    expect(screen.getByText('Trusted by 50,000+ Families')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Protection You Can Count On/,
    )
    expect(
      screen.getByText(/Comprehensive insurance coverage tailored to your life/),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Free Quote' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Call (555) 567-8901' })).toBeInTheDocument()
  })

  it('renders the stats row and trust badges', () => {
    render(<Hero />)
    for (const stat of ['50,000+', '98%', 'A+', '24/7']) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }
    for (const label of [
      'Clients Protected',
      'Claim Approval',
      'AM Best Rating',
      'Support Available',
    ]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    }
    for (const badge of ['BBB Accredited', 'AM Best Rated', 'Licensed in 50 States']) {
      expect(screen.getByText(badge)).toBeInTheDocument()
    }
  })
})
