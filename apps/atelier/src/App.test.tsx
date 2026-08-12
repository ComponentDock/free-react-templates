import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all Atelier sections with landmarks and sets the document title', () => {
    const { container } = render(<App />)

    expect(document.title).toBe('Atelier — Fashion E-commerce Template')
    expect(container.querySelector('header')).not.toBeNull()
    expect(container.querySelector('main')).not.toBeNull()
    expect(container.querySelector('footer')).not.toBeNull()

    expect(screen.getByRole('link', { name: 'Atelier' })).toBeInTheDocument()

    // Categories.
    expect(screen.getByRole('heading', { level: 2, name: "Women's fashion" })).toBeInTheDocument()
    // New products.
    expect(screen.getByRole('heading', { level: 2, name: 'New Product' })).toBeInTheDocument()
    // Banner (the only level-1 heading).
    expect(
      screen.getByRole('heading', { level: 1, name: 'The Project Jacket' }),
    ).toBeInTheDocument()
    // Trend.
    expect(screen.getByRole('heading', { level: 2, name: 'Trending Now' })).toBeInTheDocument()
    // Discount.
    expect(screen.getByRole('heading', { level: 2, name: 'Summer 2030' })).toBeInTheDocument()
    // Services.
    expect(screen.getByRole('heading', { level: 3, name: 'Free Shipping' })).toBeInTheDocument()
    // Instagram.
    expect(screen.getByRole('heading', { level: 2, name: 'Instagram' })).toBeInTheDocument()
    // Footer.
    expect(screen.getByRole('heading', { level: 2, name: 'Quick Links' })).toBeInTheDocument()

    // 5 category tiles + 8 products + 1 banner + 3 trend cards + 1 discount
    // + 6 instagram tiles = 24 images.
    expect(container.querySelectorAll('img')).toHaveLength(24)
  })
})
