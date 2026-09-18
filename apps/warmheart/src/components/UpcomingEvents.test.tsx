import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { UpcomingEvents } from './UpcomingEvents'

describe('UpcomingEvents', () => {
  it('renders the heading', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('renders three event cards', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText("The Universe Through A Child's Eyes")).toBeInTheDocument()
    expect(screen.getByText('Community Rebuilding Workshop')).toBeInTheDocument()
    expect(screen.getByText('Annual Charity Gala')).toBeInTheDocument()
  })

  it('renders Join Now buttons', () => {
    render(<UpcomingEvents />)
    const buttons = screen.getAllByText('Join Now')
    expect(buttons).toHaveLength(3)
  })

  it('renders event dates', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('25th February, 2025')).toBeInTheDocument()
    expect(screen.getByText('15th March, 2025')).toBeInTheDocument()
    expect(screen.getByText('10th April, 2025')).toBeInTheDocument()
  })
})
