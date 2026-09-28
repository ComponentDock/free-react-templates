import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections and sets the document title', () => {
    render(<App />)

    // Navbar brand
    expect(screen.getAllByText('Foodnest').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    // Services
    expect(screen.getByText('Enjoy Eating')).toBeInTheDocument()

    // Restaurant
    expect(screen.getByRole('heading', { level: 2, name: 'The Restaurant' })).toBeInTheDocument()

    // SpecialMenu
    expect(screen.getByRole('heading', { level: 2, name: 'Special Menu' })).toBeInTheDocument()

    // OurMenu
    expect(screen.getByRole('heading', { level: 2, name: 'Our Menu' })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('Mellisa Howard')).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { level: 2, name: 'Blog' })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    expect(document.title).toBe('Foodnest — Restaurant Landing Template')
  })
})
