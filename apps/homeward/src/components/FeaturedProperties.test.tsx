import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('renders the section title', () => {
    render(<FeaturedProperties />)
    expect(screen.getByRole('heading', { name: /Featured Properties/i })).toBeInTheDocument()
    expect(screen.getByText(/The Best Deals/i)).toBeInTheDocument()
  })

  it('renders three property cards with images and details', () => {
    render(<FeaturedProperties />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)

    expect(screen.getByText('$1,250,000')).toBeInTheDocument()
    expect(screen.getByText('$3,500/mo')).toBeInTheDocument()
    expect(screen.getByText('$890,000')).toBeInTheDocument()
  })

  it('displays property specs for each card', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText(/1,200 sqft/)).toBeInTheDocument()
    expect(screen.getByText(/3 Beds/)).toBeInTheDocument()
    expect(screen.getByText(/2 Baths/)).toBeInTheDocument()
    expect(screen.getAllByText(/Garages/).length).toBeGreaterThanOrEqual(1)
  })

  it('shows property tags', () => {
    render(<FeaturedProperties />)
    expect(screen.getAllByText('For Sale').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('For Rent')).toBeInTheDocument()
  })
})
