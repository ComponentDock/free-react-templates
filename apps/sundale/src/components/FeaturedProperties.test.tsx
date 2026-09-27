import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('renders section heading', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Featured Properties')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<FeaturedProperties />)
    const matches = screen.getAllByText(/Suspendisse dictum enim sit amet/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('renders 6 property cards', () => {
    render(<FeaturedProperties />)
    const cards = screen.getAllByText('For Sale')
    expect(cards).toHaveLength(6)
  })

  it('renders property titles', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Villa in Los Angeles')).toBeInTheDocument()
    expect(screen.getByText('Town House in Los Angeles')).toBeInTheDocument()
  })

  it('renders property prices', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('$945,679')).toBeInTheDocument()
    expect(screen.getByText('$720,500')).toBeInTheDocument()
  })

  it('renders property addresses', () => {
    render(<FeaturedProperties />)
    const addresses = screen.getAllByText('Upper Road 3411, no.34 CA')
    expect(addresses.length).toBe(2)
  })

  it('renders property images with alt text', () => {
    render(<FeaturedProperties />)
    const images = screen.getAllByRole('img')
    const propertyImages = images.filter((img) =>
      img.getAttribute('src')?.includes('sundale-property'),
    )
    expect(propertyImages.length).toBe(6)
  })
})
