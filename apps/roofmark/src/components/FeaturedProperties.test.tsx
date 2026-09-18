import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('renders section title', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('The best deals')).toBeInTheDocument()
    expect(screen.getByText('Featured Properties')).toBeInTheDocument()
  })

  it('renders 3 property cards', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('123 Street, New York, USA')).toBeInTheDocument()
    expect(screen.getByText('456 Avenue, Los Angeles, USA')).toBeInTheDocument()
    expect(screen.getByText('789 Boulevard, Chicago, USA')).toBeInTheDocument()
  })

  it('renders prices for all properties', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('$1,200')).toBeInTheDocument()
    expect(screen.getByText('$2,500')).toBeInTheDocument()
    expect(screen.getByText('$3,800')).toBeInTheDocument()
  })

  it('renders stats for all properties', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('1200 sq ft')).toBeInTheDocument()
    expect(screen.getByText('950 sq ft')).toBeInTheDocument()
    expect(screen.getByText('2400 sq ft')).toBeInTheDocument()
  })
})
