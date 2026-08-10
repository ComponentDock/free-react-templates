import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders every section of the Bazaar template', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /^Bazaar$/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Arrivals Sales')
    expect(
      screen.getByRole('heading', { level: 2, name: /Discover.*The Collections/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Popular Products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Most Rated' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'New Shoes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Promo' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Contact Info' })).toBeInTheDocument()
  })
})
