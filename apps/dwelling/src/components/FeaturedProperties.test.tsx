import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('renders the section heading', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Featured')).toBeInTheDocument()
    expect(screen.getAllByText('Property').length).toBeGreaterThanOrEqual(1)
  })

  it('renders 4 featured property cards', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Home in Merrick Way')).toBeInTheDocument()
    expect(screen.getByText('Sunset Valley Villa')).toBeInTheDocument()
    expect(screen.getByText('Downtown Loft')).toBeInTheDocument()
    expect(screen.getByText('Lakeside Retreat')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('$ 289/month')).toBeInTheDocument()
    expect(screen.getByText('$ 450/month')).toBeInTheDocument()
  })

  it('renders bed and bath counts', () => {
    render(<FeaturedProperties />)
    expect(screen.getAllByText(/Beds/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Baths/).length).toBeGreaterThanOrEqual(1)
  })
})
