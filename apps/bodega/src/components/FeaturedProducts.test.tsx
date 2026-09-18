import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders all four category cards', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText(/Fashion/)).toBeInTheDocument()
    expect(screen.getByText(/New/)).toBeInTheDocument()
    expect(screen.getByText(/Arrival/)).toBeInTheDocument()
    expect(screen.getByText(/Sale/)).toBeInTheDocument()
    expect(screen.getByText(/20%/)).toBeInTheDocument()
    expect(screen.getByText(/Shoes/)).toBeInTheDocument()
  })

  it('has proper aria label', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('region', { name: 'Featured products' })).toBeInTheDocument()
  })

  it('renders four category links', () => {
    render(<FeaturedProducts />)
    const links = screen.getAllByRole('link')
    const categoryLinks = links.filter((l) => l.getAttribute('href') === '#shop')
    expect(categoryLinks.length).toBe(4)
  })
})
