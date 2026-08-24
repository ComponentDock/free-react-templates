import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getAllByText(/CUDDLE/).length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText('Raising Hope')).toBeInTheDocument()

    // Intro
    expect(
      screen.getByText('We Help Thousands of Children to Get Their Education'),
    ).toBeInTheDocument()

    // Counter
    expect(screen.getByText('$60M')).toBeInTheDocument()

    // Causes
    expect(screen.getByText('Our Causes')).toBeInTheDocument()

    // CTA Image
    expect(
      screen.getByText('The Smallest Act of Kindness is Worth More Than the Grandest Intention'),
    ).toBeInTheDocument()

    // Volunteers
    expect(screen.getByText('Our Volunteer')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('What People Says')).toBeInTheDocument()

    // CTA Banner
    expect(screen.getByText('Do You Care Our Children?')).toBeInTheDocument()

    // Blog
    expect(screen.getByText('Recent From Blog')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)

    expect(document.title).toBe('Cuddle — Charity & Donation Template')
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)

    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
