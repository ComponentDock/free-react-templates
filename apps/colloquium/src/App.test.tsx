import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Colloquium').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Biggest Developer Conference 2025')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Colloquium')).toBeInTheDocument()
    expect(screen.getByText('Our Event Speakers')).toBeInTheDocument()
    expect(screen.getByText('Choose Your Plan')).toBeInTheDocument()
    expect(screen.getByText('Book Your Tickets Now')).toBeInTheDocument()
    expect(screen.getByText(/© 2025 Colloquium/)).toBeInTheDocument()
  })
})
