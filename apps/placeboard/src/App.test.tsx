import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Placeboard template with all sections', () => {
    render(<App />)

    // Navbar brand
    expect(screen.getByText('Placeboard')).toBeInTheDocument()

    // Hero
    expect(screen.getByText('Find your perfect place.')).toBeInTheDocument()

    // Feature Destinations
    expect(screen.getByText('Santorini, Greece')).toBeInTheDocument()
    expect(screen.getByText('Bali, Indonesia')).toBeInTheDocument()
    expect(screen.getByText('Kyoto, Japan')).toBeInTheDocument()

    // Top Destinations
    expect(screen.getByText('Top Destinations')).toBeInTheDocument()

    // Promo
    expect(screen.getByText('Get 10% off On Your Next Travel')).toBeInTheDocument()

    // Featured Carousel
    expect(screen.getByText('More Featured Destinations')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
