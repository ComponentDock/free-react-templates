import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('JobNest — Find Your Dream Job')
  })

  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()

    // Hero
    expect(screen.getByText('Find your Dream Job')).toBeInTheDocument()

    // JobSearchBar
    expect(screen.getByRole('textbox', { name: 'Search keyword' })).toBeInTheDocument()

    // PopularCategories
    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular Categories' }),
    ).toBeInTheDocument()

    // JobListings
    expect(screen.getByRole('heading', { level: 2, name: 'Job Listing' })).toBeInTheDocument()

    // FeaturedCandidates
    expect(
      screen.getByRole('heading', { level: 2, name: 'Featured Candidates' }),
    ).toBeInTheDocument()

    // TopCompanies
    expect(screen.getByRole('heading', { level: 2, name: 'Top Companies' })).toBeInTheDocument()

    // CtaBanner
    expect(screen.getByText('Looking for a Job?')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
