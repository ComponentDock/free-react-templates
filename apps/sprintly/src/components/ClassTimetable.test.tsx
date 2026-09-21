import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClassTimetable } from './ClassTimetable'

describe('ClassTimetable', () => {
  it('renders the heading and day headers', () => {
    render(<ClassTimetable />)
    expect(screen.getByRole('heading', { name: /Class Timetable/i })).toBeInTheDocument()
    for (const day of ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']) {
      expect(screen.getByText(day)).toBeInTheDocument()
    }
  })

  it('shows class entries', () => {
    render(<ClassTimetable />)
    expect(screen.getAllByText('6:00 — Crossfit Lv1').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('7:00 — Energy Blast')).toBeInTheDocument()
  })
})
