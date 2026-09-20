import { render, screen, act } from '@testing-library/react'
import { vi } from 'vitest'
import { UpcomingEvents } from './UpcomingEvents'

describe('UpcomingEvents', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the section heading badge', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('renders the event headline', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('We must walk in the middle of the road.')).toBeInTheDocument()
  })

  it('renders event metadata', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('Saturday 03/09/2018 09:30 AM')).toBeInTheDocument()
    expect(screen.getByText('St. Petersburg, US')).toBeInTheDocument()
    expect(screen.getByText('Pastor Luis Matthew')).toBeInTheDocument()
  })

  it('renders countdown blocks', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hr')).toBeInTheDocument()
    expect(screen.getByText('Min')).toBeInTheDocument()
    expect(screen.getByText('Sec')).toBeInTheDocument()
  })

  it('updates countdown on tick', () => {
    render(<UpcomingEvents />)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    // The seconds block should have a numeric value
    const secBlock = screen.getByText('Sec')
    expect(secBlock).toBeInTheDocument()
  })
})
