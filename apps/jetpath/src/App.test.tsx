import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    const logos = screen.getAllByText('jetpath')
    expect(logos.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Explore the World/)).toBeInTheDocument()
    expect(screen.getByText('Popular Destinations')).toBeInTheDocument()
    expect(screen.getByText('Best Packages')).toBeInTheDocument()
    expect(screen.getByText('Why Travel With Us')).toBeInTheDocument()
    expect(screen.getByText('What Our Travelers Say')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
