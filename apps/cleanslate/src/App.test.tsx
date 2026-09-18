import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/Phone no/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Clean.*Slate/ })).toBeInTheDocument()
    expect(screen.getByText(/dirty work/)).toBeInTheDocument()
    expect(screen.getByText(/Make an Appointment/i)).toBeInTheDocument()
    expect(screen.getByText(/fresher than ever/)).toBeInTheDocument()
    expect(screen.getByText('How We Work')).toBeInTheDocument()
    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getAllByText('Happy Customers').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Latest News').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/make your space shine/)).toBeInTheDocument()
    expect(screen.getAllByText('Pricing').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('CleanSlate — Cleaning Services Template')
  })
})
