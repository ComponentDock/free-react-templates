import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)
    // Navbar content
    expect(screen.getByText('Login')).toBeInTheDocument()
    // HeroSlider content
    expect(screen.getAllByText('123 Street, New York, USA').length).toBeGreaterThanOrEqual(1)
    // SearchBar content
    expect(screen.getByText('Find your home')).toBeInTheDocument()
    // FeaturedProperties content
    expect(screen.getByText('Featured Properties')).toBeInTheDocument()
    // HotDeal content
    expect(screen.getByText('Sunny Apartment in Manhattan')).toBeInTheDocument()
    // Testimonials content
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
    // Footer content
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
    // FooterBar content
    expect(screen.getByText(/Roofmark\. All rights reserved/)).toBeInTheDocument()
  })

  it('renders the main wrapper', () => {
    const { container } = render(<App />)
    const wrapper = container.querySelector('.min-h-screen')
    expect(wrapper).toBeInTheDocument()
  })

  it('renders main element wrapping content sections', () => {
    render(<App />)
    const main = document.querySelector('main')
    expect(main).toBeInTheDocument()
  })
})
