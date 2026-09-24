import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsSection } from './StatsSection'

describe('StatsSection', () => {
  it('renders all stat values', () => {
    render(<StatsSection />)
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('1M+')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
  })

  it('renders all stat labels', () => {
    render(<StatsSection />)
    expect(screen.getByText('Episodes Published')).toBeInTheDocument()
    expect(screen.getByText('Total Downloads')).toBeInTheDocument()
    expect(screen.getByText('Countries Reached')).toBeInTheDocument()
    expect(screen.getByText('Average Rating')).toBeInTheDocument()
  })

  it('has the correct aria-label', () => {
    render(<StatsSection />)
    expect(screen.getByLabelText('Showcase statistics')).toBeInTheDocument()
  })

  it('renders four stat blocks', () => {
    render(<StatsSection />)
    const stats = screen.getAllByText(
      /Episodes Published|Total Downloads|Countries Reached|Average Rating/,
    )
    expect(stats).toHaveLength(4)
  })
})
