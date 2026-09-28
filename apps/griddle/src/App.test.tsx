import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Header
    expect(screen.getByText('Griddle')).toBeInTheDocument()

    // Hero slider
    expect(screen.getByText('Big Deal')).toBeInTheDocument()

    // Menu grid
    expect(screen.getByRole('heading', { name: 'Best Ever Burgers' })).toBeInTheDocument()

    // About
    expect(screen.getByText('About Us')).toBeInTheDocument()

    // Video section
    expect(screen.getByText('How we make delicious Burger')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toBeTruthy()
  })
})
