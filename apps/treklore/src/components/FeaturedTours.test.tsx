import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedTours } from './FeaturedTours'

describe('FeaturedTours', () => {
  it('renders section title', () => {
    render(<FeaturedTours />)
    expect(screen.getByText('Featured Tours')).toBeInTheDocument()
    expect(screen.getByText('curated experiences')).toBeInTheDocument()
  })

  it('renders all tour titles', () => {
    render(<FeaturedTours />)
    expect(screen.getByText('Bali Adventure Explorer')).toBeInTheDocument()
    expect(screen.getByText('Paris Art & Culture')).toBeInTheDocument()
    expect(screen.getByText('Thailand Island Hopping')).toBeInTheDocument()
    expect(screen.getByText('Greek Islands Discovery')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<FeaturedTours />)
    expect(screen.getByText('$1,299')).toBeInTheDocument()
    expect(screen.getByText('$1,599')).toBeInTheDocument()
    expect(screen.getByText('$2,199')).toBeInTheDocument()
    expect(screen.getByText('$2,499')).toBeInTheDocument()
  })

  it('renders badges', () => {
    render(<FeaturedTours />)
    expect(screen.getByText('Best Seller')).toBeInTheDocument()
    expect(screen.getByText('Special Offer')).toBeInTheDocument()
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('renders View Details buttons', () => {
    render(<FeaturedTours />)
    const buttons = screen.getAllByText('View Details')
    expect(buttons.length).toBe(4)
  })

  it('renders images with alt text', () => {
    render(<FeaturedTours />)
    expect(screen.getByAltText('Bali Adventure Explorer tour')).toBeInTheDocument()
    expect(screen.getByAltText('Paris Art & Culture tour')).toBeInTheDocument()
  })
})
