import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Content } from './Content'

describe('Content', () => {
  it('renders the heading, view-all link, and four media cards', () => {
    render(<Content />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/LATEST CONTENT/i)
    expect(screen.getByRole('link', { name: 'View All' })).toBeInTheDocument()

    expect(screen.getByText('Anxious for Nothing')).toBeInTheDocument()
    expect(screen.getByText('Dating, Relationships & Red Flags')).toBeInTheDocument()
    expect(screen.getByText('Morning Devotional')).toBeInTheDocument()
    expect(screen.getByText('Made for More')).toBeInTheDocument()
  })

  it('shows the media type and duration on every card', () => {
    render(<Content />)

    expect(screen.getAllByText('Video')).toHaveLength(2)
    expect(screen.getByText('28:42')).toBeInTheDocument()
    expect(screen.getByText('Podcast')).toBeInTheDocument()
    expect(screen.getByText('45:00')).toBeInTheDocument()
    expect(screen.getByText('Devotional')).toBeInTheDocument()
    expect(screen.getByText('5-Day')).toBeInTheDocument()
    expect(screen.getByText('35:20')).toBeInTheDocument()
  })
})
