import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders the sidebar heading and featured items', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('heading', { name: /Featured Products/i })).toBeInTheDocument()
    expect(screen.getAllByText('Down Jacket').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Summer Dress').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Sport Shoes').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Designer Bag').length).toBeGreaterThanOrEqual(1)
  })

  it('renders filter tabs', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('button', { name: "Men's" })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Woman' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Shoes' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Bags' })).toBeInTheDocument()
  })

  it('filters products when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<FeaturedProducts />)
    // Default tab is Men's - should show Down Jacket, Casual Hoodie, Leather Jacket
    expect(screen.getAllByText('Down Jacket').length).toBeGreaterThanOrEqual(1)
    // Click Woman tab
    await user.click(screen.getByRole('button', { name: 'Woman' }))
    expect(screen.getAllByText('Summer Dress').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Silk Blouse').length).toBeGreaterThanOrEqual(1)
    // Click Shoes tab
    await user.click(screen.getByRole('button', { name: 'Shoes' }))
    expect(screen.getAllByText('Sport Shoes').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('High Heels').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Canvas Sneakers').length).toBeGreaterThanOrEqual(1)
    // Click Bags tab
    await user.click(screen.getByRole('button', { name: 'Bags' }))
    expect(screen.getAllByText('Designer Bag').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Crossbody Bag').length).toBeGreaterThanOrEqual(1)
  })

  it('displays badge labels on products', () => {
    render(<FeaturedProducts />)
    expect(screen.getAllByText('Sale').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('New').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('-10%').length).toBeGreaterThanOrEqual(1)
  })

  it('renders product images in sidebar', () => {
    render(<FeaturedProducts />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
