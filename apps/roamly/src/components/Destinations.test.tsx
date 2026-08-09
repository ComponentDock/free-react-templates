import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Destinations } from './Destinations'

describe('Destinations', () => {
  it('renders the heading and subtext', () => {
    render(<Destinations />)
    expect(screen.getByRole('heading', { level: 2, name: 'Explore the World' })).toBeInTheDocument()
  })

  it('renders all six destination cards with ratings and blurbs', () => {
    render(<Destinations />)
    expect(screen.getByRole('heading', { level: 3, name: 'Bali, Indonesia' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Santorini, Greece' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Machu Picchu, Peru' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Tokyo, Japan' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Maldives' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Swiss Alps' })).toBeInTheDocument()
    expect(screen.getByText('4.9 • 24 tours')).toBeInTheDocument()
    expect(screen.getByText('4.8 • 18 tours')).toBeInTheDocument()
    expect(screen.getByText('4.9 • 12 tours')).toBeInTheDocument()
    expect(screen.getByText('4.7 • 32 tours')).toBeInTheDocument()
    expect(screen.getByText('4.9 • 15 tours')).toBeInTheDocument()
    expect(screen.getByText('4.8 • 20 tours')).toBeInTheDocument()
    expect(screen.getByText(/Tropical paradise with stunning temples/)).toBeInTheDocument()
    expect(screen.getByText(/Majestic peaks and world-class skiing/)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Bali, Indonesia' })).toBeInTheDocument()
  })

  it('renders the view-all link below the grid', () => {
    render(<Destinations />)
    expect(screen.getByRole('link', { name: /view all destinations/i })).toBeInTheDocument()
  })
})
