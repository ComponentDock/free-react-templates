import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedFood } from './FeaturedFood'

describe('FeaturedFood', () => {
  it('renders the section heading', () => {
    render(<FeaturedFood />)
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Featured Food')
  })

  it('renders all four featured food items', () => {
    render(<FeaturedFood />)
    expect(screen.getByText('Mountain Mike Pizza')).toBeInTheDocument()
    expect(screen.getByText('Patatas Bravas')).toBeInTheDocument()
    expect(screen.getByText('Pulled Sandwich')).toBeInTheDocument()
    expect(screen.getByText('Gourmet Burger')).toBeInTheDocument()
  })

  it('displays prices for each item', () => {
    render(<FeaturedFood />)
    expect(screen.getByText('$35')).toBeInTheDocument()
    expect(screen.getByText('$30')).toBeInTheDocument()
    expect(screen.getByText('$20')).toBeInTheDocument()
    expect(screen.getByText('$28')).toBeInTheDocument()
  })

  it('renders star rating icons for each item', () => {
    const { container } = render(<FeaturedFood />)
    const stars = container.querySelectorAll('.fill-yellow-400')
    expect(stars.length).toBe(20) // 5 items * 4 stars each (lucide Star has fill)
  })
})
