import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Spread template with all sections', () => {
    render(<App />)
    // Navbar — "Spread" appears in both navbar and footer
    const spreadTexts = screen.getAllByText('Spread')
    expect(spreadTexts.length).toBeGreaterThanOrEqual(2)
    // Hero
    expect(screen.getByText(/Discover The World/)).toBeInTheDocument()
    // Featured
    expect(screen.getByText(/A Closer Look At Our Front Porch/)).toBeInTheDocument()
    // Trending
    expect(screen.getByText('Trending Now')).toBeInTheDocument()
    // Featured Videos
    expect(screen.getByText('Featured Videos')).toBeInTheDocument()
    // Most Viewed
    expect(screen.getByText('Most Viewed Videos')).toBeInTheDocument()
    // Sidebar
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getByText('Latest Videos')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Spread — Video & Magazine Template')
  })
})
