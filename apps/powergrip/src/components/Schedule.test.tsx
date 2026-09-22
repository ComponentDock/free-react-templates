import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Schedule } from './Schedule'
import { daysOfWeek, scheduleEntries, scheduleTitle } from '../data'

describe('Schedule', () => {
  it('renders the heading and day tabs', () => {
    render(<Schedule />)
    expect(screen.getByRole('heading', { level: 2, name: scheduleTitle })).toBeInTheDocument()
    for (const day of daysOfWeek) {
      expect(screen.getByRole('button', { name: day })).toBeInTheDocument()
    }
  })

  it('renders schedule entries', () => {
    render(<Schedule />)
    for (const entry of scheduleEntries) {
      expect(screen.getByRole('heading', { level: 3, name: entry.title })).toBeInTheDocument()
    }
  })

  it('switches active day tab', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByRole('button', { name: 'Monday' }))
    expect(screen.getByRole('button', { name: 'Monday' })).toHaveAttribute('aria-pressed', 'true')
  })
})
