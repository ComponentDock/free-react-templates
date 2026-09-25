import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { UpcomingEvents } from './UpcomingEvents'

describe('UpcomingEvents', () => {
  it('renders the section heading', () => {
    render(<UpcomingEvents />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Upcoming Events')
  })

  it('renders 3 upcoming event cards', () => {
    render(<UpcomingEvents />)
    const cards = screen.getAllByTestId('upcoming-card')
    expect(cards).toHaveLength(3)
  })

  it('renders event titles', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('Classic Songs For Classic People')).toBeInTheDocument()
    expect(screen.getByText('Underground Beats Night')).toBeInTheDocument()
    expect(screen.getByText('Sunset Rooftop Sessions')).toBeInTheDocument()
  })
})
