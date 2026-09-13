import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    // Navbar
    const pipeflowTexts = screen.getAllByText('Pipeflow')
    expect(pipeflowTexts.length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText("We're your plumber")).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()

    // Quote
    expect(screen.getByText(/Plumbing/)).toBeInTheDocument()

    // Services
    expect(screen.getByText('Our services')).toBeInTheDocument()
    expect(screen.getByText('Maintenance')).toBeInTheDocument()
    expect(screen.getByText('Residential Service')).toBeInTheDocument()
    expect(screen.getByText('Commercial Service')).toBeInTheDocument()

    // Features
    expect(screen.getByText('Features That make us Unique')).toBeInTheDocument()
    expect(screen.getByText('Multiple Layouts')).toBeInTheDocument()
    expect(screen.getByText('Clean Coding')).toBeInTheDocument()
    expect(screen.getByText('Endless Features')).toBeInTheDocument()
    expect(screen.getByText('Fully Customizable')).toBeInTheDocument()

    // Counters
    expect(screen.getByText('2,536')).toBeInTheDocument()
    expect(screen.getByText('6,784')).toBeInTheDocument()
    expect(screen.getByText('1,059')).toBeInTheDocument()
    expect(screen.getByText('12,239')).toBeInTheDocument()

    // Video
    expect(screen.getByText('Explore ourselves in a new way')).toBeInTheDocument()
    expect(screen.getByText('Watch Video')).toBeInTheDocument()

    // CTA
    expect(screen.getByText('Got Impressed to our features')).toBeInTheDocument()
    expect(screen.getByText('Get a free Quote')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText("What our Client's Say about us")).toBeInTheDocument()

    // Contact
    expect(screen.getByText('Contact us')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByText('Send Message')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Pipeflow — Plumbing Services Template')
  })
})
