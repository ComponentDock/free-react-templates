import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('shows the section heading, seven day tabs, and the default Sunday panel', () => {
    render(<Schedule />)
    expect(screen.getByText('Fitness Sched')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Schedule' })).toBeInTheDocument()

    for (const day of [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]) {
      expect(screen.getByRole('tab', { name: day })).toBeInTheDocument()
    }
    expect(screen.getByRole('tab', { name: 'Sunday' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Sunday 7:30am - 9:00am')).toBeInTheDocument()
    expect(screen.getByText('Sunday 6:00pm - 7:30pm')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Power Lifting' })).toBeInTheDocument()
  })

  it('switches the panel when another day tab is activated', async () => {
    const user = userEvent.setup()
    render(<Schedule />)

    await user.click(screen.getByRole('tab', { name: 'Monday' }))
    expect(screen.getByRole('tab', { name: 'Monday' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Monday 7:30am - 9:00am')).toBeInTheDocument()
    expect(screen.queryByText('Sunday 7:30am - 9:00am')).not.toBeInTheDocument()
  })
})
