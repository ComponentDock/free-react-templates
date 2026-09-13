import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestProducts } from './LatestProducts'

describe('LatestProducts', () => {
  it('renders the section heading', () => {
    render(<LatestProducts />)
    expect(screen.getByRole('heading', { name: /Our Latest Product/i })).toBeInTheDocument()
  })

  it('renders product cards with names and prices', () => {
    render(<LatestProducts />)
    expect(screen.getAllByText('Down Jacket').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$120')).toBeInTheDocument()
    // Casual Hoodie appears in LatestProducts and possibly FeaturedProducts sidebar
    expect(screen.getAllByText('Casual Hoodie').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$80')).toBeInTheDocument()
  })

  it('displays strikethrough sale prices', () => {
    render(<LatestProducts />)
    const strikethrough = screen.getAllByText('$150')
    expect(strikethrough.length).toBeGreaterThanOrEqual(1)
    strikethrough.forEach((el) => {
      expect(el).toHaveClass('line-through')
    })
  })

  it('renders Add To Cart buttons', () => {
    render(<LatestProducts />)
    const buttons = screen.getAllByRole('button', { name: /Add To Cart/i })
    expect(buttons.length).toBeGreaterThanOrEqual(6)
  })

  it('renders compare and wishlist icon buttons', () => {
    render(<LatestProducts />)
    const compareButtons = screen.getAllByRole('button', { name: 'Compare' })
    const wishlistButtons = screen.getAllByRole('button', { name: 'Wishlist' })
    expect(compareButtons.length).toBeGreaterThanOrEqual(1)
    expect(wishlistButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders product images', () => {
    render(<LatestProducts />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })
})
