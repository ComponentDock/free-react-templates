import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularLocations } from './PopularLocations'

describe('PopularLocations', () => {
  it('renders section heading', () => {
    render(<PopularLocations />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Explore Top Cities')
  })

  it('renders all 6 city cards', () => {
    render(<PopularLocations />)
    const cities = ['New York', 'Paris', 'Rome', 'Sydney', 'Tokyo', 'London']
    cities.forEach((city) => {
      expect(screen.getByText(city)).toBeInTheDocument()
    })
  })

  it('shows listing counts', () => {
    render(<PopularLocations />)
    expect(screen.getByText(/65\+.*Listings/)).toBeInTheDocument()
    expect(screen.getByText(/78\+.*Listings/)).toBeInTheDocument()
  })
})
