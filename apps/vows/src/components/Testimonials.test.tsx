import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the eyebrow, heading, and sub', () => {
    render(<Testimonials />)

    expect(screen.getByText('Love Letters')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Couples Say' }),
    ).toBeInTheDocument()
  })

  it('renders three testimonials with stars, quotes, authors, and dates', () => {
    render(<Testimonials />)

    expect(screen.getAllByRole('img', { name: 'Rated 5 out of 5 stars' })).toHaveLength(3)
    expect(
      screen.getByText(/the Vows team made us feel like their only clients/),
    ).toBeInTheDocument()
    expect(screen.getByText('Sarah & Michael')).toBeInTheDocument()
    expect(screen.getByText('June 2025 Wedding')).toBeInTheDocument()
    expect(screen.getByText('Emma & James')).toBeInTheDocument()
    expect(screen.getByText('September 2024 Wedding')).toBeInTheDocument()
    expect(screen.getByText('Isabella & Alexander')).toBeInTheDocument()
    expect(screen.getByText('May 2025 Wedding')).toBeInTheDocument()
  })
})
