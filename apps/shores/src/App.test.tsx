import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getByText('Shores')).toBeInTheDocument()

    // Hero
    expect(screen.getByText('Give a hand')).toBeInTheDocument()

    // Causes
    expect(screen.getByText('Our major causes')).toBeInTheDocument()

    // About
    expect(screen.getByText(/We are nonprofit team/)).toBeInTheDocument()

    // Featured Causes
    expect(screen.getByText('Featured causes')).toBeInTheDocument()

    // Events
    expect(screen.getByText('Upcoming events')).toBeInTheDocument()

    // Team
    expect(screen.getByText('Meet our volunteers')).toBeInTheDocument()

    // CTA
    expect(screen.getByText('Become a volunteer')).toBeInTheDocument()

    // Blog
    expect(screen.getByText('Our latest Story')).toBeInTheDocument()

    // Newsletter
    expect(screen.getByText('Do you have a question?')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Shores — Charity & Nonprofit Template')
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
