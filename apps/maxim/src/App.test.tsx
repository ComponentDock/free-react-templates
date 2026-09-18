import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Maxim')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Maxim — Law Firm Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Reputation, Respect, Result')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Maxim A Law Firm')).toBeInTheDocument()
    expect(screen.getByText('Our Testimonials')).toBeInTheDocument()
    expect(screen.getAllByText('Practice Areas').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Legal Attorneys')).toBeInTheDocument()
    expect(screen.getByText('Recent Posts')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
