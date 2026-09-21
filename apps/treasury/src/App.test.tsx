import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Treasury').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Banking Solutions')).toBeInTheDocument()
    expect(screen.getByText('Money Savings')).toBeInTheDocument()
    expect(screen.getByText('Amortization Computation')).toBeInTheDocument()
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Meet Team')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getAllByText('Testimonials').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(1)
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Treasury — Banking & Finance Template')
  })
})
