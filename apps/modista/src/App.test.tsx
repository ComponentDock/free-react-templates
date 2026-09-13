import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Modista — Fashion E-Commerce Shop')
  })

  it('composes every section in the layout', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // TopBar
    expect(screen.getByText('+84 987 654 321')).toBeInTheDocument()

    // Navbar
    expect(screen.getAllByRole('link', { name: 'MODISTA' }).length).toBeGreaterThanOrEqual(1)

    // HeroSlider - uses heading, not img to avoid clash with PromoBanners
    expect(screen.getByRole('heading', { name: 'Our Latest Product' })).toBeInTheDocument()

    // CategoryListing
    expect(screen.getByRole('heading', { name: 'Men' })).toBeInTheDocument()

    // FeaturedProducts
    expect(screen.getByRole('heading', { name: 'Featured Products' })).toBeInTheDocument()

    // BlogSection
    expect(screen.getByRole('heading', { name: 'From The Blog' })).toBeInTheDocument()

    // Footer Component Dock
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()

    // Promo banners exist
    const shopNowLinks = screen.getAllByRole('link', { name: 'Shop Now' })
    expect(shopNowLinks.length).toBeGreaterThanOrEqual(2)
  })
})
