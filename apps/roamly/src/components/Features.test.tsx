import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and subtext', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Travel with Confidence' }),
    ).toBeInTheDocument()
  })

  it('renders all six feature cards with icons and descriptions', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Safe & Secure Travel' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Expert Local Guides' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Curated Experiences' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Best Price Guarantee' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Flexible Booking' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: '24/7 Support' })).toBeInTheDocument()
    expect(screen.getByText(/comprehensive travel insurance/)).toBeInTheDocument()
    expect(screen.getByText(/free cancellation up to 30 days/)).toBeInTheDocument()
    expect(screen.getByText(/always just a call away/)).toBeInTheDocument()
  })
})
