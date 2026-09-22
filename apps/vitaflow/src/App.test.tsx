import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)
    // TopBar
    expect(screen.getByText(/Phone no:/)).toBeInTheDocument()
    // Navbar
    expect(screen.getAllByText('Vita').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getAllByText(/Welcome to Vitaflow/).length).toBeGreaterThanOrEqual(1)
    // Services
    expect(screen.getAllByText('Exercise Program').length).toBeGreaterThanOrEqual(1)
    // AboutSplit
    expect(screen.getAllByText(/Health coaching is a natural way/).length).toBeGreaterThanOrEqual(1)
    // ConsultationBar
    expect(screen.getAllByText('Free Consultation').length).toBeGreaterThanOrEqual(1)
    // Testimonials
    expect(screen.getByText(/Happy Clients/)).toBeInTheDocument()
    // HowItWorks
    expect(screen.getByText('How it works?')).toBeInTheDocument()
    // SuccessStories
    expect(screen.getByText('Successful Stories')).toBeInTheDocument()
    // CTAIntro
    expect(
      screen.getAllByText(/We Provide Free Health Care Consultation/).length,
    ).toBeGreaterThanOrEqual(1)
    // Pricing
    expect(screen.getByText('Choose Your Perfect Plans')).toBeInTheDocument()
    // Blog
    expect(screen.getByText('Latest news from our blog')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Vitaflow — Health Coaching Landing Template')
  })
})
