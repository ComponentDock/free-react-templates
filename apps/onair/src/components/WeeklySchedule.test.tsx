import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeeklySchedule } from './WeeklySchedule'

describe('WeeklySchedule', () => {
  it('renders the Weekly Schedule heading', () => {
    render(<WeeklySchedule />)
    expect(screen.getByRole('heading', { level: 2, name: /Weekly Schedule/ })).toBeInTheDocument()
  })

  it('renders all day column headers', () => {
    render(<WeeklySchedule />)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    for (const day of days) {
      expect(screen.getByRole('columnheader', { name: day })).toBeInTheDocument()
    }
  })

  it('renders show names in the table', () => {
    render(<WeeklySchedule />)
    expect(screen.getAllByText('As BBC Radio 5 live').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Andrew Peach Birthday Surprise!')).toBeInTheDocument()
    expect(screen.getAllByText('Stereo Underground').length).toBeGreaterThanOrEqual(1)
  })
})
