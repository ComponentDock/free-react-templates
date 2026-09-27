import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('renders the section heading', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Listing From Our Agents')).toBeInTheDocument()
    expect(screen.getByText('Featured Properties')).toBeInTheDocument()
  })

  it('renders all four property cards', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Villa On Washington Avenue')).toBeInTheDocument()
    expect(screen.getByText('Luxury Penthouse Suite')).toBeInTheDocument()
    expect(screen.getByText('Modern Family Home')).toBeInTheDocument()
    expect(screen.getByText('Cozy Studio Apartment')).toBeInTheDocument()
  })

  it('renders agent names', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Mike Davis')).toBeInTheDocument()
    expect(screen.getByText('Emily Brown')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('$1,200,000')).toBeInTheDocument()
    expect(screen.getByText('$2,500,000')).toBeInTheDocument()
    expect(screen.getByText('$850,000')).toBeInTheDocument()
    expect(screen.getByText('$420,000')).toBeInTheDocument()
  })

  it('renders Feature tags', () => {
    render(<FeaturedProperties />)
    const featureTags = screen.getAllByText('Feature')
    expect(featureTags.length).toBe(4)
  })

  it('renders For Sale tags', () => {
    render(<FeaturedProperties />)
    const saleTags = screen.getAllByText('For Sale')
    expect(saleTags.length).toBe(4)
  })
})
