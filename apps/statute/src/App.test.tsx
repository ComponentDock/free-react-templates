import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar brand link
    const statuteLinks = screen.getAllByRole('link', { name: /Statute/i })
    expect(statuteLinks.length).toBeGreaterThanOrEqual(2) // Navbar + Footer
    // Hero
    expect(
      screen.getByRole('heading', { name: /Attorneys Fighting For Your Freedom/i }),
    ).toBeInTheDocument()
    // Services
    expect(screen.getByRole('heading', { name: /Request A Quote/i })).toBeInTheDocument()
    // About
    expect(screen.getByRole('heading', { name: /Dedicated to Give You/i })).toBeInTheDocument()
    // Counter
    expect(screen.getByText('Cases Won')).toBeInTheDocument()
    // About2
    expect(screen.getByRole('heading', { name: /We Are Here To Help/i })).toBeInTheDocument()
    // Testimonials
    expect(screen.getByRole('heading', { name: /Testimony/i })).toBeInTheDocument()
    // Steps
    expect(screen.getByRole('heading', { name: /How We Work/i })).toBeInTheDocument()
    // Blog
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
    // Footer contact
    expect(screen.getByText('info@statute.com')).toBeInTheDocument()
    // FooterBottom
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
