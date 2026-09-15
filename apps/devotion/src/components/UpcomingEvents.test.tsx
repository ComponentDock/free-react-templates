import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { UpcomingEvents } from './UpcomingEvents'

describe('UpcomingEvents', () => {
  it('renders the section heading', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('renders event cards with titles', () => {
    render(<UpcomingEvents />)
    const titles = screen.getAllByText(/Lorem Ipsum Dolor Sit Amet/)
    expect(titles.length).toBeGreaterThanOrEqual(1)
  })

  it('shows event dates', () => {
    render(<UpcomingEvents />)
    const dates = screen.getAllByText(/Dec 20th, 2018/)
    expect(dates.length).toBeGreaterThanOrEqual(1)
  })
})
