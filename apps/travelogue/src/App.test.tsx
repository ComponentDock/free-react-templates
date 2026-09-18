import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Travelogue — Travel Agency Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Hero
    const heroHeading = screen.getByRole('heading', { level: 1 })
    expect(heroHeading.textContent).toBe('Explore the World')

    // Destinations
    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular Destinations' }),
    ).toBeInTheDocument()

    // Features
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us' })).toBeInTheDocument()

    // Popular Trips
    expect(screen.getByRole('heading', { level: 2, name: 'Popular Trips' })).toBeInTheDocument()

    // Testimonials
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()

    // Newsletter
    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe to Our Newsletter' }),
    ).toBeInTheDocument()

    // Footer
    const footers = screen.getAllByRole('contentinfo')
    expect(footers.length).toBe(1)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
