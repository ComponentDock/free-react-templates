import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('renders the section heading', () => {
    render(<FeaturedProperties />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Properties')
  })

  it('shows at least three property cards', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Greenview Villa')).toBeInTheDocument()
    expect(screen.getByText('Skyline Apartment')).toBeInTheDocument()
    expect(screen.getByText('Lakefront Cottage')).toBeInTheDocument()
  })

  it('shows property prices', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('$320,000')).toBeInTheDocument()
    expect(screen.getByText('$3,050/mo')).toBeInTheDocument()
  })

  it('shows View Details links', () => {
    render(<FeaturedProperties />)
    const links = screen.getAllByText('View Details')
    expect(links.length).toBeGreaterThanOrEqual(3)
  })

  it('shows badges for Sale and Rent', () => {
    render(<FeaturedProperties />)
    const saleBadges = screen.getAllByText('Sale')
    const rentBadges = screen.getAllByText('Rent')
    expect(saleBadges.length).toBeGreaterThanOrEqual(1)
    expect(rentBadges.length).toBeGreaterThanOrEqual(1)
  })
})
