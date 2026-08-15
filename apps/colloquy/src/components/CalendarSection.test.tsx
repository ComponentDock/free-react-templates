import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { calendarDays, calendarHours, calendarSpeaker } from '../data'
import { CalendarSection } from './CalendarSection'

describe('CalendarSection', () => {
  it('renders both day columns with all four event rows each', () => {
    render(<CalendarSection />)
    for (const day of calendarDays) {
      expect(screen.getByRole('heading', { level: 2, name: day.label })).toBeInTheDocument()
      for (const event of day.events) {
        expect(screen.getAllByText(event.time).length).toBeGreaterThan(0)
        expect(screen.getAllByText(event.venue).length).toBeGreaterThan(0)
        expect(screen.getAllByText(event.title).length).toBeGreaterThan(0)
      }
    }
    expect(screen.getAllByText(calendarHours)).toHaveLength(8)
    expect(screen.getAllByText(calendarSpeaker)).toHaveLength(8)
  })
})
