import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsBar } from './StatsBar'

describe('StatsBar', () => {
  it('renders all stat values', () => {
    render(<StatsBar />)
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('2M+')).toBeInTheDocument()
    expect(screen.getByText('Top 50')).toBeInTheDocument()
    expect(screen.getByText('4.8')).toBeInTheDocument()
  })

  it('renders all stat labels', () => {
    render(<StatsBar />)
    expect(screen.getByText('Episodes')).toBeInTheDocument()
    expect(screen.getByText('Downloads')).toBeInTheDocument()
    expect(screen.getByText('Tech Podcast')).toBeInTheDocument()
    expect(screen.getByText('Rating')).toBeInTheDocument()
  })

  it('has the correct aria-label', () => {
    render(<StatsBar />)
    expect(screen.getByLabelText('Podcast statistics')).toBeInTheDocument()
  })

  it('renders four stat blocks', () => {
    render(<StatsBar />)
    const stats = screen.getAllByText(/Episodes|Downloads|Tech Podcast|Rating/)
    expect(stats).toHaveLength(4)
  })
})
