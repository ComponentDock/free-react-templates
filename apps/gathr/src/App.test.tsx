import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // "Gathr" appears in Navbar and Footer
    expect(screen.getAllByText('Gathr').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Prepare yourself for the conference')).toBeInTheDocument()
    expect(screen.getByText('About the Event')).toBeInTheDocument()
    expect(screen.getByText('Our Speakers')).toBeInTheDocument()
    expect(screen.getByText('Pricing Table')).toBeInTheDocument()
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
    expect(screen.getByText('Our Partners')).toBeInTheDocument()
    expect(screen.getByText('Get Your Tickets')).toBeInTheDocument()
  })

  it('renders the navbar', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
