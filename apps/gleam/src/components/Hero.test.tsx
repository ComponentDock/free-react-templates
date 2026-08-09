import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and CTAs', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Professional Cleaning, Guaranteed Spotless' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Trusted by thousands of homeowners and businesses in Austin/i),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Get Free Quote' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: 'Call (555) 867-5309' })).toBeInTheDocument()
    expect(screen.getAllByText('Instant Quote').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the trust stats row', () => {
    render(<Hero />)

    expect(screen.getByText('5000+')).toBeInTheDocument()
    expect(screen.getByText('Homes Cleaned')).toBeInTheDocument()
    expect(screen.getByText('4.9★')).toBeInTheDocument()
    expect(screen.getByText('Star Rating')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Satisfaction')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('5-Star Reviews')).toBeInTheDocument()
  })

  it('includes the quote calculator', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument()
    expect(screen.getByText('$315')).toBeInTheDocument()
  })
})
