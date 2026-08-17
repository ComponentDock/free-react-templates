import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders every section of the one-page directory template', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: "Let's Explore Your Awesome City" }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Popular Listing' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'We Have Special Offers Every Now and Then',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Listing' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Borough — A Directory & Listing' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Happy People' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'How It Works' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()

    expect(screen.getAllByText('Explore The Best Restaurant in New York')).toHaveLength(4)
    expect(screen.getAllByText('Borough').length).toBeGreaterThan(0)
  })

  it('renders the counters at their final values without IntersectionObserver', () => {
    render(<App />)
    for (const value of ['50', '210', '450', '100']) {
      expect(screen.getAllByText(value).length).toBeGreaterThan(0)
    }
  })
})
