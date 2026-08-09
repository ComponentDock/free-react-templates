import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Events } from './Events'

describe('Events', () => {
  it('renders the heading, view-all link, and event cards with names and dates', () => {
    render(<Events />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/UPCOMING EVENTS/i)
    expect(screen.getByRole('link', { name: 'View All Events' })).toBeInTheDocument()

    expect(screen.getByText('Elevate Night')).toBeInTheDocument()
    expect(screen.getByText('Summer Camp 2025')).toBeInTheDocument()
    expect(screen.getByText('City Serve Day')).toBeInTheDocument()
    expect(screen.getByText('Spring Retreat')).toBeInTheDocument()
    expect(screen.getByText('Worship Night')).toBeInTheDocument()
  })

  it('marks the featured events with a Featured badge', () => {
    render(<Events />)

    expect(screen.getAllByText('Featured')).toHaveLength(2)
  })

  it('shows the featured event schedule and a Learn More link', () => {
    render(<Events />)

    expect(screen.getByText('Every Wednesday · 6:30 PM - 8:30 PM')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })
})
