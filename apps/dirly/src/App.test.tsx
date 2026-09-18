import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)
    // Navbar + Footer both have "Dirly"
    expect(screen.getAllByText('Dirly').length).toBeGreaterThanOrEqual(2)
    // Hero (subtitle + heading both have this text)
    expect(screen.getAllByText('Find Nearby Attraction').length).toBeGreaterThanOrEqual(2)
    // Categories
    expect(screen.getByText('Most Popular Categories')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Dirly — Find Nearby Attractions')
  })
})
