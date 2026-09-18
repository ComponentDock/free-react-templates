import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('How It Works')
  })

  it('renders Explore Listing button', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('button', { name: /explore listing/i })).toBeInTheDocument()
  })

  it('renders all 3 steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Find Businesses')).toBeInTheDocument()
    expect(screen.getByText('Review Listings')).toBeInTheDocument()
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument()
  })

  it('shows step numbers', () => {
    render(<HowItWorks />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })
})
