import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and at least three attributed quotes', () => {
    render(<Testimonials />)

    expect(screen.getByText('Client Testimonials')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()

    expect(screen.getAllByRole('figure')).toHaveLength(4)
    expect(screen.getByText('Robert Williams')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechVenture Inc.')).toBeInTheDocument()
    expect(screen.getByText('Jennifer Martinez')).toBeInTheDocument()
    expect(screen.getByText('Patricia Thompson')).toBeInTheDocument()
  })

  it('shows the recognition strip with leading legal publications', () => {
    render(<Testimonials />)

    expect(screen.getByText('Recognized By Leading Legal Publications')).toBeInTheDocument()
    expect(screen.getByText('Super Lawyers')).toBeInTheDocument()
    expect(screen.getByText('Top 100')).toBeInTheDocument()
    expect(screen.getByText('Best Lawyers')).toBeInTheDocument()
    expect(screen.getByText('Martindale-Hubbell')).toBeInTheDocument()
    expect(screen.getByText('AV Preeminent')).toBeInTheDocument()
    expect(screen.getByText('Chambers USA')).toBeInTheDocument()
  })
})
