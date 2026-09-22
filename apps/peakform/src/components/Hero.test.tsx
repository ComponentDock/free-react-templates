import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('renders headline text', () => {
    render(<Hero />)
    expect(screen.getByText(/get your body/i)).toBeInTheDocument()
  })

  it('renders a CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders slide indicators', () => {
    render(<Hero />)
    const indicators = screen.getAllByRole('button', { name: /go to slide/i })
    expect(indicators.length).toBeGreaterThan(0)
  })

  it('navigates to previous slide', () => {
    render(<Hero />)
    const prevBtn = screen.getByRole('button', { name: /previous/i })
    fireEvent.click(prevBtn)
    expect(screen.getByText(/push your limits/i)).toBeInTheDocument()
  })

  it('navigates to next slide', () => {
    render(<Hero />)
    const nextBtn = screen.getByRole('button', { name: /next/i })
    fireEvent.click(nextBtn)
    expect(screen.getByText(/train like a champion/i)).toBeInTheDocument()
  })

  it('navigates via slide indicator', () => {
    render(<Hero />)
    const indicators = screen.getAllByRole('button', { name: /go to slide/i })
    fireEvent.click(indicators[1]!)
    expect(screen.getByText(/train like a champion/i)).toBeInTheDocument()
  })
})
