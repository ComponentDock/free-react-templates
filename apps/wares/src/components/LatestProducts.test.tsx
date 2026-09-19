import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestProducts } from './LatestProducts'

describe('LatestProducts', () => {
  it('renders section title', () => {
    render(<LatestProducts />)
    expect(screen.getByText('Latest Products')).toBeInTheDocument()
  })

  it('renders all products', () => {
    render(<LatestProducts />)
    expect(screen.getByText('Fitness Tracker')).toBeInTheDocument()
    expect(screen.getByText('Phone Case')).toBeInTheDocument()
    expect(screen.getByText('Travel Mug')).toBeInTheDocument()
    expect(screen.getByText('Wireless Charger')).toBeInTheDocument()
  })
})
