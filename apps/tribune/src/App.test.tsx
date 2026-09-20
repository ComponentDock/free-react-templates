import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { App } from './App'

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2025-10-01T00:00:00Z'))
})

afterEach(() => {
  vi.useRealTimers()
})

describe('App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)

    expect(screen.getAllByText(/Tribune/).length).toBeGreaterThan(0)
    expect(screen.getByText('Business Leaders')).toBeInTheDocument()
    expect(screen.getByText('Venue')).toBeInTheDocument()
    expect(screen.getByText('Transport')).toBeInTheDocument()
    expect(screen.getByText('Hotel')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('What is all about us?')).toBeInTheDocument()
    expect(screen.getByText('Conference Schedule')).toBeInTheDocument()
    expect(screen.getByText('Conference Gallery')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Conference Ticket Pricing')).toBeInTheDocument()
    expect(screen.getByText('Conference Speakers')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Tribune — Conference Landing Page')
  })
})
