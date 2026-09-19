import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar + Footer both have Bloomfield links
    expect(screen.getAllByRole('link', { name: 'Bloomfield' }).length).toBeGreaterThanOrEqual(2)
    // Hero
    expect(screen.getByText(/Fresh Flower & Gift Shop/)).toBeInTheDocument()
    // Benefits
    expect(screen.getByText('Made by artist')).toBeInTheDocument()
    // Categories
    expect(screen.getByText('Fresh Flower')).toBeInTheDocument()
    // About section
    expect(screen.getByText(/We provide all kinds of fresh flower services/)).toBeInTheDocument()
    // New Arrivals
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    // Call to action
    expect(screen.getByText('Custom flower')).toBeInTheDocument()
    // Blog
    expect(screen.getByText('Bloomfield tricks')).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
