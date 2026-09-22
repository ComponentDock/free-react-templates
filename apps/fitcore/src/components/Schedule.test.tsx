import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the schedule heading', () => {
    render(<Schedule />)
    expect(screen.getByText('Our Time Schedule')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Select the Perfect Time/)
  })

  it('shows all seven day tabs', () => {
    render(<Schedule />)
    const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    for (const day of days) {
      expect(screen.getByRole('tab', { name: `Show ${day} schedule` })).toBeInTheDocument()
    }
  })

  it('defaults to Monday and shows Monday classes', () => {
    render(<Schedule />)
    expect(screen.getByRole('tab', { name: 'Show Monday schedule' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByText('HIIT Training')).toBeInTheDocument()
    expect(screen.getByText('Pilates')).toBeInTheDocument()
    expect(screen.getByText('Weight Training')).toBeInTheDocument()
  })

  it('switches to a different day when clicked', async () => {
    const user = userEvent.setup()
    render(<Schedule />)

    await user.click(screen.getByRole('tab', { name: 'Show Wednesday schedule' }))
    expect(screen.getByRole('tab', { name: 'Show Wednesday schedule' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByText('Kick Boxing')).toBeInTheDocument()
    expect(screen.getByText('Yoga Flow')).toBeInTheDocument()
    expect(screen.getByText('CrossFit')).toBeInTheDocument()
  })

  it('shows instructor names', () => {
    render(<Schedule />)
    expect(screen.getByText('Jordan Blake')).toBeInTheDocument()
    expect(screen.getByText('Casey Rivera')).toBeInTheDocument()
    expect(screen.getByText('Morgan Hayes')).toBeInTheDocument()
  })
})
