import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Plumero — Pillow Store')

    // Navbar
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Plumero' }).length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Best quality pillow')
    expect(screen.getByRole('link', { name: 'Shop Now' })).toBeInTheDocument()

    // FeaturedProducts
    expect(screen.getAllByText('Explore Now').length).toBeGreaterThanOrEqual(1)

    // TrendingItems
    expect(screen.getByRole('heading', { name: 'Trending Items' })).toBeInTheDocument()

    // ClientReviews
    expect(screen.getByRole('heading', { name: 'Client Reviews' })).toBeInTheDocument()

    // Features
    expect(screen.getByRole('heading', { name: 'Why Choose Us' })).toBeInTheDocument()

    // Newsletter
    expect(screen.getByRole('heading', { name: /Get promotions/ })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
