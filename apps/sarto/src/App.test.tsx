import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // TopBar
    expect(screen.getByText(/Call Us:/)).toBeInTheDocument()
    // Navbar
    expect(screen.getByRole('link', { name: 'Sarto' })).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Fashion for/)
    // HotDeals
    expect(screen.getAllByRole('heading', { name: 'Hot Deals of this Month' })).toHaveLength(2)
    // FeaturedProducts
    expect(screen.getByRole('heading', { name: 'Featured Products' })).toBeInTheDocument()
    // Newsletter
    expect(
      screen.getByRole('heading', { name: 'Subscribe for Our Newsletter' }),
    ).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sarto — Fashion E-Commerce Template')
  })
})
