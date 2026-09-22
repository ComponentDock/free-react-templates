import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getByText('IronShed')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { name: 'Our Program' })).toBeInTheDocument()

    // CTA Banner
    expect(screen.getByRole('heading', { name: /Start your Journey/ })).toBeInTheDocument()

    // Classes
    expect(screen.getByRole('heading', { name: 'Our Class' })).toBeInTheDocument()

    // Trainer Schedule
    const scheduleHeadings = screen.getAllByText('Our Trainer')
    expect(scheduleHeadings.length).toBeGreaterThanOrEqual(1)

    // Latest News
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Request A Call Back')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('IronShed — Fitness & Gym Template')
  })
})
