import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders every Settle section in order', () => {
    const { container } = render(<App />)

    // Navbar.
    expect(screen.getByRole('link', { name: 'Settle' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open shopping cart' })).toBeInTheDocument()

    // Hero slider.
    expect(screen.getByRole('heading', { level: 1, name: 'Wood & Cloth Sofa' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy Now' })).toBeInTheDocument()

    // Featured category.
    expect(screen.getByRole('heading', { level: 2, name: 'Featured Category' })).toBeInTheDocument()

    // Products ("awesome shop" — 12) + best sellers (4).
    expect(screen.getByRole('heading', { level: 2, name: 'awesome shop' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Best Sellers' })).toBeInTheDocument()
    const addToCart = screen.getAllByRole('button', { name: '+ Add to cart' })
    expect(addToCart).toHaveLength(16)

    // Offer band.
    expect(
      screen.getByRole('heading', { level: 2, name: 'Weekly Sale on 60% Off All Products' }),
    ).toBeInTheDocument()

    // Subscribe band.
    expect(
      screen.getByRole('heading', { level: 3, name: 'Subscribe to get Updated with new offers' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('textbox', { name: 'Email address' })).toHaveLength(2)

    // Client logos.
    expect(screen.getByText('Google')).toBeInTheDocument()
    expect(screen.getByText('Airbnb')).toBeInTheDocument()

    // Footer.
    expect(screen.getByRole('heading', { level: 2, name: 'Top Products' })).toBeInTheDocument()
    expect(screen.getByText('© Settle. All rights reserved.')).toBeInTheDocument()

    // 12 + 4 product images + 4 category images + 1 hero + 1 offer = 22.
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(22)
  })
})
