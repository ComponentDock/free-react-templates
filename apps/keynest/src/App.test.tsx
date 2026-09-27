import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getAllByText('Key').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText('Find Your Dream Home')).toBeInTheDocument()
    // PropertyListings
    expect(screen.getByText('Searching for the Best Places?')).toBeInTheDocument()
    // FeatureShowcase
    expect(screen.getByText(/Just browse away/)).toBeInTheDocument()
    // ProcessSteps
    expect(screen.getByText('Choose a category')).toBeInTheDocument()
    // Team
    expect(screen.getByText('Meet Our Agents')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Keynest — Property Listing Template')
  })
})
