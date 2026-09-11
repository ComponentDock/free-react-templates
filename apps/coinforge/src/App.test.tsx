import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar + Footer both have "Coinforge" brand link
    expect(screen.getAllByRole('link', { name: /^Coinforge$/ }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: /Fast Growing ICO/i })).toBeInTheDocument()
    expect(screen.getByText('We are featured in')).toBeInTheDocument()
    expect(screen.getByText(/A Platform for Exchange/i)).toBeInTheDocument()
    expect(screen.getByText('Exciting Opportunity')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /ICO.*Live Now/i })).toBeInTheDocument()
    expect(screen.getByText('Download Documentation')).toBeInTheDocument()
    expect(screen.getByText('Initial Distribution')).toBeInTheDocument()
    expect(screen.getByText('Development Roadmap')).toBeInTheDocument()
    expect(screen.getByText('Core Team')).toBeInTheDocument()
    expect(screen.getByText('Track from Anywhere')).toBeInTheDocument()
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
    expect(screen.getByText('Our Community')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
