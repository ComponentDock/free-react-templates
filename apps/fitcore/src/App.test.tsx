import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Header
    expect(screen.getByRole('link', { name: /FitCore/i })).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    // About
    expect(screen.getByText('About Our Gym')).toBeInTheDocument()
    // Services
    expect(screen.getByText('Our Services For You')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText('Client Feedback')).toBeInTheDocument()
    // Team
    expect(screen.getByText('Our Team Members')).toBeInTheDocument()
    // Schedule
    expect(screen.getByText('Our Time Schedule')).toBeInTheDocument()
    // Contact
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    // Footer
    expect(screen.getByText(/© 2026 FitCore/)).toBeInTheDocument()
  })
})
