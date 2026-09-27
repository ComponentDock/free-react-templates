import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Find Your Dream House')).toBeInTheDocument()
    expect(screen.getByText('How It Work')).toBeInTheDocument()
  })

  it('renders all three step cards', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Search & Find Apartment')).toBeInTheDocument()
    expect(screen.getByText('Find Your Room')).toBeInTheDocument()
    expect(screen.getByText('Talk To Agent')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Browse through our extensive/)).toBeInTheDocument()
    expect(screen.getByText(/Explore detailed listings/)).toBeInTheDocument()
    expect(screen.getByText(/Connect with our experienced/)).toBeInTheDocument()
  })
})
