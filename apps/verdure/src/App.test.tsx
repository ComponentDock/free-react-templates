import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Professional Gardeners/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/Welcome to Verdure/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Explore Our Best Offer/i)).toBeInTheDocument()
    expect(screen.getByText(/Recent Post/i)).toBeInTheDocument()
    expect(screen.getByText(/Our Plans & Pricing/i)).toBeInTheDocument()
    expect(screen.getByText(/More templates at/i)).toBeInTheDocument()
  })
})
