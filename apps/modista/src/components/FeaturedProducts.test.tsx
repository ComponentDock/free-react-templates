import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders the section with heading', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('region', { name: 'Featured products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Featured Products' })).toBeInTheDocument()
  })

  it('shows 4 featured products in the sidebar', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText('Classic Watch')).toBeInTheDocument()
    expect(screen.getByText('Leather Belt')).toBeInTheDocument()
    expect(screen.getByText('Polarized Shades')).toBeInTheDocument()
    expect(screen.getByText('Silk Tie')).toBeInTheDocument()
  })

  it('shows filter tabs', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('tab', { name: "Men's" })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Woman' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Shoes' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Bags' })).toBeInTheDocument()
  })

  it('defaults to Men tab selected', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('tab', { name: "Men's" })).toHaveAttribute('aria-selected', 'true')
  })

  it('filters products when clicking Woman tab', async () => {
    const user = userEvent.setup()
    render(<FeaturedProducts />)

    await user.click(screen.getByRole('tab', { name: 'Woman' }))

    expect(screen.getByRole('tab', { name: 'Woman' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Summer Dress')).toBeInTheDocument()
    expect(screen.getByText('Floral Skirt')).toBeInTheDocument()
    expect(screen.queryByText('Winter Parka')).not.toBeInTheDocument()
  })

  it('filters products when clicking Shoes tab', async () => {
    const user = userEvent.setup()
    render(<FeaturedProducts />)

    await user.click(screen.getByRole('tab', { name: 'Shoes' }))

    expect(screen.getByText('Running Sneakers')).toBeInTheDocument()
    expect(screen.getByText('Ankle Boots')).toBeInTheDocument()
  })

  it('filters products when clicking Bags tab', async () => {
    const user = userEvent.setup()
    render(<FeaturedProducts />)

    await user.click(screen.getByRole('tab', { name: 'Bags' }))

    expect(screen.getByText('Crossbody Bag')).toBeInTheDocument()
    expect(screen.getByText('Tote Bag')).toBeInTheDocument()
  })

  it('shows badge labels on products', () => {
    render(<FeaturedProducts />)

    expect(screen.getByText('Sale')).toBeInTheDocument()
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('shows Add To Cart buttons', () => {
    render(<FeaturedProducts />)
    const buttons = screen.getAllByText('Add To Cart')
    expect(buttons.length).toBeGreaterThanOrEqual(2)
  })

  it('shows product prices', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText('$189')).toBeInTheDocument()
  })
})
