import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getAllByText('Town').length).toBeGreaterThan(0)
    // Hero
    expect(screen.getByText('Discover Great Places')).toBeInTheDocument()
    // Popular Locations
    expect(screen.getByText('Popular Locations')).toBeInTheDocument()
    // How It Works
    expect(screen.getByText('Every Month, Millions of People')).toBeInTheDocument()
    // Categories
    expect(screen.getByText('Featured Categories')).toBeInTheDocument()
    // Testimonial
    expect(screen.getByText('What our clients say')).toBeInTheDocument()
    // Subscribe
    expect(screen.getByText('Subscribe For Newsletter')).toBeInTheDocument()
    // Blog
    expect(screen.getByText('News and tips')).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
