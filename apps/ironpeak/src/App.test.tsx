import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Header
    expect(screen.getByRole('link', { name: /Ironpeak/i })).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    // Classes
    expect(screen.getByText('Featured Classes')).toBeInTheDocument()
    // Schedule
    expect(screen.getByText('Our Schedule')).toBeInTheDocument()
    // Trainers
    expect(screen.getByText('Expert Trainers')).toBeInTheDocument()
    // Testimonials
    expect(screen.getAllByText('Testimonial').length).toBeGreaterThanOrEqual(1)
    // Blog
    expect(screen.getByText('Blog')).toBeInTheDocument()
    // Footer
    expect(screen.getByText(/© 2026 Ironpeak/)).toBeInTheDocument()
  })
})
