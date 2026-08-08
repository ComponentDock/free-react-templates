import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DailyOffice } from './DailyOffice'

describe('DailyOffice', () => {
  it('renders the heading and four daily prayer offices', () => {
    render(<DailyOffice />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'A Rhythm of Prayer' }),
    ).toBeInTheDocument()
    for (const name of ['Lauds', 'Midday Prayer', 'Vespers', 'Compline']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
  })

  it('shows the office times', () => {
    render(<DailyOffice />)
    expect(screen.getByText('6:30 AM')).toBeInTheDocument()
    expect(screen.getByText('12:00 PM')).toBeInTheDocument()
    expect(screen.getByText('5:30 PM')).toBeInTheDocument()
    expect(screen.getByText('8:30 PM')).toBeInTheDocument()
  })
})
