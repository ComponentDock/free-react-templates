import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and subtext', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Customers Say' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Join thousands of satisfied customers/i)).toBeInTheDocument()
  })

  it('renders three quote cards with 5-star ratings, names, locations, and Verified badges', () => {
    render(<Testimonials />)
    for (const name of ['Alexandra Chen', 'Marcus Johnson', 'Sophie Williams']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getByText('Los Angeles, CA')).toBeInTheDocument()
    expect(screen.getAllByText('Verified')).toHaveLength(3)
    expect(screen.getAllByLabelText('5 out of 5 stars')).toHaveLength(3)
  })

  it('renders the trust row with Trustpilot, SSL Secured, and Verified Reviews', () => {
    render(<Testimonials />)
    expect(screen.getByText('Trustpilot')).toBeInTheDocument()
    expect(screen.getByText('SSL Secured')).toBeInTheDocument()
    expect(screen.getByText('Verified Reviews')).toBeInTheDocument()
  })
})
