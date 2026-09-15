import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Stratum')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Stratum')).toBeInTheDocument()
    expect(screen.getByText('Land & Property')).toBeInTheDocument()
    expect(screen.getAllByText('Surface Mining').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Gold Nuggets')).toBeInTheDocument()
    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getAllByText('Pricing').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Frequently Ask Questions')).toBeInTheDocument()
    expect(screen.getAllByText('Press').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(1)
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Stratum — Mining & Industrial')
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
