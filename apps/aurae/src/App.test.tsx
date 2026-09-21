import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    const auraeLinks = screen.getAllByRole('link', { name: /Aurae/i })
    expect(auraeLinks.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Welcome to Aurae/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Popular Classes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Trainers/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Upcoming Events/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Pricing Plans/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Sign Up for Our Classes/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Aurae — Yoga & Wellness Template')
  })
})
