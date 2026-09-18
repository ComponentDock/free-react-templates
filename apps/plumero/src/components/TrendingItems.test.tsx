import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrendingItems } from './TrendingItems'

describe('TrendingItems', () => {
  it('renders the heading and six trending product cards', () => {
    render(<TrendingItems />)

    expect(screen.getByRole('heading', { name: 'Trending Items' })).toBeInTheDocument()

    const products = screen.getAllByRole('img')
    expect(products.length).toBe(6)

    expect(screen.getByText('Cloud Soft Pillow')).toBeInTheDocument()
    expect(screen.getByText('Luxury Silk Pillow')).toBeInTheDocument()
    expect(screen.getByText('Eco Bamboo Pillow')).toBeInTheDocument()
    expect(screen.getByText('Neck Support Pillow')).toBeInTheDocument()
    expect(screen.getByText('Hypoallergenic Pillow')).toBeInTheDocument()
    expect(screen.getByText('Travel Size Pillow')).toBeInTheDocument()

    const prices = screen.getAllByText('From $5')
    expect(prices.length).toBe(6)
  })
})
