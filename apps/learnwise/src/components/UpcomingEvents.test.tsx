import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UpcomingEvents } from './UpcomingEvents'

describe('UpcomingEvents', () => {
  it('renders the section heading', () => {
    render(<UpcomingEvents />)
    expect(screen.getByRole('heading', { name: 'Upcoming events' })).toBeInTheDocument()
  })

  it('renders three event cards', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('Networking Day')).toBeInTheDocument()
    expect(screen.getByText('Open Doors Day')).toBeInTheDocument()
    expect(screen.getByText('Creative Leadership')).toBeInTheDocument()
  })

  it('renders date badges', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('August 26')).toBeInTheDocument()
    expect(screen.getByText('August 7')).toBeInTheDocument()
    expect(screen.getByText('August 3')).toBeInTheDocument()
  })

  it('renders event fees', () => {
    render(<UpcomingEvents />)
    const fees = screen.getAllByText('$45')
    expect(fees.length).toBe(2)
    expect(screen.getByText('Free')).toBeInTheDocument()
  })
})
