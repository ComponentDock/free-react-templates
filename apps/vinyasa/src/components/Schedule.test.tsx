import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('shows the heading and a table with course and weekday columns', () => {
    render(<Schedule />)
    expect(
      screen.getByRole('heading', { name: 'Schedule your Fitness Process' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Course name' })).toBeInTheDocument()
    for (const day of ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']) {
      expect(screen.getByRole('columnheader', { name: day })).toBeInTheDocument()
    }
    expect(screen.getByRole('rowheader', { name: 'Fitness Aero' })).toBeInTheDocument()
    expect(screen.getByRole('rowheader', { name: 'Senior Fitness' })).toBeInTheDocument()
    expect(screen.getByRole('rowheader', { name: 'Cardio Flow' })).toBeInTheDocument()
    expect(screen.getByRole('rowheader', { name: 'Yoga Basics' })).toBeInTheDocument()
    expect(screen.getAllByText('02.00').length).toBeGreaterThan(0)
    expect(screen.getAllByText('10.00').length).toBeGreaterThan(0)
  })
})
