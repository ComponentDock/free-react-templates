import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Luminary')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Luminary — Inspiration & Creative Agency')
  })

  it('renders all major sections', () => {
    render(<App />)
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'We Inspire You To Create Great Things',
    )
    // Services
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    // About
    expect(screen.getByText('Why Are We Awesome?')).toBeInTheDocument()
    // Concept
    expect(screen.getByText('Our Concept')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    // Feature CTA
    expect(screen.getByText('Help Us by Sharing Our Works')).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: /Component Dock/i })).toBeInTheDocument()
  })
})
