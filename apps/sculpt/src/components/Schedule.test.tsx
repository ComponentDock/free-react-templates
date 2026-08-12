import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Schedule } from './Schedule'
import { DAILY_CLASSES, WEEK_DAYS } from '../data'

describe('Schedule', () => {
  it('renders the heading, weekday pills, and eight daily classes', () => {
    render(<Schedule />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Class Schedule' }),
    ).toBeInTheDocument()
    for (const day of WEEK_DAYS) {
      expect(screen.getByRole('button', { name: day })).toBeInTheDocument()
    }
    for (const entry of DAILY_CLASSES) {
      expect(screen.getByRole('heading', { level: 3, name: entry.program })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Tom Scott')).toHaveLength(DAILY_CLASSES.length)
  })

  it('switches the active weekday pill', () => {
    render(<Schedule />)
    const monday = screen.getByRole('button', { name: 'Monday' })
    expect(monday).toHaveAttribute('aria-pressed', 'false')
    fireEvent.click(monday)
    expect(monday).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Sunday' })).toHaveAttribute('aria-pressed', 'false')
  })
})
