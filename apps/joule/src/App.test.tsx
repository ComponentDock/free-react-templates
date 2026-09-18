import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    // Top header
    expect(screen.getAllByText(/\+1 \(234\) 567 890/).length).toBeGreaterThanOrEqual(1)
    // Main header
    expect(screen.getByText('Joule')).toBeInTheDocument()
    // Navigation
    expect(screen.getByText('Home')).toBeInTheDocument()
    // New Products — appears in nav and section heading
    expect(screen.getAllByText('New Products').length).toBeGreaterThanOrEqual(2)
    // Hot Deal
    expect(screen.getByText('Hot Deal This Week')).toBeInTheDocument()
    // Top Selling
    expect(screen.getByText('Top Selling')).toBeInTheDocument()
    // Newsletter
    expect(screen.getByText('NEWSLETTER')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Joule — eCommerce Shop')
  })

  it('has correct root container classes', () => {
    const { container } = render(<App />)
    const root = container.firstElementChild as HTMLElement
    expect(root.className).toContain('min-h-screen')
    expect(root.className).toContain('bg-body-bg')
  })
})
