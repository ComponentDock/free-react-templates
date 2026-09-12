import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PopularCategories } from './PopularCategories'

describe('PopularCategories', () => {
  it('renders the heading', () => {
    render(<PopularCategories />)
    expect(screen.getByRole('heading', { name: 'Popular Categories' })).toBeInTheDocument()
  })

  it('renders all category names', () => {
    render(<PopularCategories />)
    expect(screen.getByText('Cars and Vehicles')).toBeInTheDocument()
    expect(screen.getByText('Furniture')).toBeInTheDocument()
    expect(screen.getByText('Real Estate')).toBeInTheDocument()
    expect(screen.getByText('Books and Magazines')).toBeInTheDocument()
    expect(screen.getByText('Electronics')).toBeInTheDocument()
    expect(screen.getByText('Other')).toBeInTheDocument()
  })

  it('renders category counts', () => {
    render(<PopularCategories />)
    expect(screen.getByText('1,921')).toBeInTheDocument()
    expect(screen.getByText('2,339')).toBeInTheDocument()
    expect(screen.getByText('4,398')).toBeInTheDocument()
  })
})
