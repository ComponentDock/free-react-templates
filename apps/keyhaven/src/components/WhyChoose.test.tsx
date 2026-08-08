import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChoose } from './WhyChoose'

describe('WhyChoose', () => {
  it('shows the heading and the four feature cards with icon, title and description', () => {
    render(<WhyChoose />)
    expect(screen.getByRole('heading', { name: 'Why Choose Keyhaven' })).toBeInTheDocument()
    expect(
      screen.getByText(/We bring decades of experience and a personalized approach/i),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Trusted Expertise' })).toBeInTheDocument()
    expect(screen.getByText(/15\+ years of experience in luxury real estate/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Exclusive Listings' })).toBeInTheDocument()
    expect(
      screen.getByText(/Access to off-market properties and exclusive listings/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Personal Service' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Best Value' })).toBeInTheDocument()
    expect(
      screen.getByText(/Expert negotiation to ensure you get the best possible deal/i),
    ).toBeInTheDocument()
  })
})
