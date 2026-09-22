import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders 7-day weekly timetable', () => {
    render(<Schedule />)
    for (const day of [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]) {
      expect(screen.getByText(day)).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: /Class Schedule/i })).toBeInTheDocument()
  })

  it('shows time slots', () => {
    render(<Schedule />)
    expect(screen.getByText('6:00 AM')).toBeInTheDocument()
    expect(screen.getByText('8:00 AM')).toBeInTheDocument()
  })
})
