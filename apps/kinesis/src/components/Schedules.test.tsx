import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Schedules } from './Schedules'
import { scheduleDays, scheduleRows } from '../data'

describe('Schedules', () => {
  it('renders the heading and all eight table columns', () => {
    render(<Schedules />)
    expect(screen.getByRole('heading', { level: 2, name: /Fitness Schedules/ })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Time' })).toBeInTheDocument()
    for (const day of scheduleDays) {
      expect(screen.getByRole('columnheader', { name: day })).toBeInTheDocument()
    }
  })

  it('lists the five time rows with class names in the cells', () => {
    render(<Schedules />)
    for (const row of scheduleRows) {
      expect(screen.getByRole('rowheader', { name: row.time })).toBeInTheDocument()
    }
    for (const name of [
      'Body Building',
      'Weight Lifting',
      'Cardio',
      'Yoga',
      'Aerobics',
      'Cycling',
      'Stretching',
    ]) {
      expect(screen.getAllByText(name).length).toBeGreaterThan(0)
    }
  })
})
