import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

vi.mock('./components/HeroSlider', () => ({
  HeroSlider: () => <section data-testid="hero-slider">HeroSlider</section>,
}))

vi.mock('./components/PropertySearch', () => ({
  PropertySearch: () => <section data-testid="property-search">PropertySearch</section>,
}))

vi.mock('./components/Categories', () => ({
  Categories: () => <section data-testid="categories">Categories</section>,
}))

vi.mock('./components/FeaturedProperties', () => ({
  FeaturedProperties: () => <section data-testid="featured-properties">FeaturedProperties</section>,
}))

vi.mock('./components/VideoSection', () => ({
  VideoSection: () => <section data-testid="video-section">VideoSection</section>,
}))

vi.mock('./components/About', () => ({
  About: () => <section data-testid="about">About</section>,
}))

vi.mock('./components/Testimonials', () => ({
  Testimonials: () => <section data-testid="testimonials">Testimonials</section>,
}))

vi.mock('./components/Footer', () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}))

vi.mock('./components/Navbar', () => ({
  Navbar: () => <header data-testid="navbar">Navbar</header>,
}))

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Havenridge — Real Estate Agency Template')
  })

  it('renders all sections in order', () => {
    render(<App />)

    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero-slider')).toBeInTheDocument()
    expect(screen.getByTestId('property-search')).toBeInTheDocument()
    expect(screen.getByTestId('categories')).toBeInTheDocument()
    expect(screen.getByTestId('featured-properties')).toBeInTheDocument()
    expect(screen.getByTestId('video-section')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
