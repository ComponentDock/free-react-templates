import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders the sidebar heading and featured items', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('heading', { name: /Featured Products/i })).toBeInTheDocument()
    expect(screen.getByText('Down Jacket')).toBeInTheDocument()
    expect(screen.getByText('Summer Dress')).toBeInTheDocument()
    expect(screen.getByText('Sport Shoes')).toBeInTheDocument()
    expect(screen.getByText('Designer Bag')).toBeInTheDocument()
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
    // Default tab is Men's
    expect(screen.getByText('Down Jacket')).toBeInTheDocument()
    // Click Woman tab
    await user.click(screen.getByRole('button', { name: 'Woman' }))
    expect(screen.getByText('Summer Dress')).toBeInTheDocument()
    expect(screen.getByText('Silk Blouse')).toBeInTheDocument()
    // Click Shoes tab
    await user.click(screen.getByRole('button', { name: 'Shoes' }))
    expect(screen.getByText('Sport Shoes')).toBeInTheDocument()
    expect(screen.getByText('High Heels')).toBeInTheDocument()
    expect(screen.getByText('Canvas Sneakers')).toBeInTheDocument()
    // Click Bags tab
    await user.click(screen.getByRole('button', { name: 'Bags' }))
    expect(screen.getByText('Designer Bag')).toBeInTheDocument()
    expect(screen.getByText('Crossbody Bag')).toBeInTheDocument()
  })

  it('displays badge labels on products', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText('Sale')).toBeInTheDocument()
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByText('-10%')).toBeInTheDocument()
  })

  it('renders product images in sidebar', () => {
    render(<FeaturedProducts />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
