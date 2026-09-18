import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the events section', () => {
    render(<Events />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('renders all 3 events', () => {
    render(<Events />)
    expect(screen.getByText('Summer Yoga Retreat')).toBeInTheDocument()
    expect(screen.getByText('Mindfulness Workshop')).toBeInTheDocument()
    expect(screen.getByText('Yoga for Beginners')).toBeInTheDocument()
  })

  it('displays event dates', () => {
    render(<Events />)
    expect(screen.getByText('Aug 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 20, 2026')).toBeInTheDocument()
  })
})
