import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Header — BlueCoast appears in header and footer, use getAllByText
    expect(screen.getAllByText('BlueCoast').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText('Villa With Sea View')).toBeInTheDocument()
    // Search
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    // Recent Properties
    expect(screen.getByText('Recent Properties')).toBeInTheDocument()
    // Cities
    expect(screen.getByText('Find properties in these cities')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText('What our clients say')).toBeInTheDocument()
    // Newsletter
    expect(screen.getByText('Are you buying or selling?')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
