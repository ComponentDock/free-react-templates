import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the Navbar with brand name', () => {
    render(<App />)
    expect(screen.getByText('Warmheart')).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Help for Victims Affected by Flood')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Warmheart')).toBeInTheDocument()
    expect(screen.getByText('Our Major Causes')).toBeInTheDocument()
    expect(screen.getByText('Our Key Features')).toBeInTheDocument()
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
    expect(screen.getByText('Testimonial from our Donors')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Warmheart — Nonprofit & Charity Template')
  })
})
