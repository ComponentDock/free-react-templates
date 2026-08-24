import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('renders the section heading', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Featured Properties')).toBeInTheDocument()
  })

  it('renders all 4 property cards', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Sunset Villa')).toBeInTheDocument()
    expect(screen.getByText('Maple Residence')).toBeInTheDocument()
    expect(screen.getByText('Riverside Mansion')).toBeInTheDocument()
    expect(screen.getByText('Greenfield Estate')).toBeInTheDocument()
  })

  it('renders prices for each property', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('$245,000')).toBeInTheDocument()
    expect(screen.getByText('$189,000')).toBeInTheDocument()
    expect(screen.getByText('$420,000')).toBeInTheDocument()
    expect(screen.getByText('$312,000')).toBeInTheDocument()
  })

  it('renders agent names for each property', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Thompson')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders locations for each property', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Los Angeles, CA')).toBeInTheDocument()
    expect(screen.getByText('Portland, OR')).toBeInTheDocument()
    expect(screen.getByText('Austin, TX')).toBeInTheDocument()
    expect(screen.getByText('Denver, CO')).toBeInTheDocument()
  })
})
