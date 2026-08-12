import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WorkingHours } from './WorkingHours'

describe('WorkingHours', () => {
  it('renders the heading and all seven day rows', () => {
    render(<WorkingHours />)

    expect(screen.getByRole('heading', { name: 'Working Hours' })).toBeInTheDocument()

    const rows: Array<[string, string]> = [
      ['Monday', '16:00 - 20:00'],
      ['Tuesday', '12:00 - 20:00'],
      ['Wednesday', '12:00 - 20:00'],
      ['Thursday', '12:00 - 20:00'],
      ['Friday', '15:00 - 21:00'],
      ['Saturday', '10:00 - 20:00'],
      ['Sunday', 'Closed'],
    ]

    for (const [day, hours] of rows) {
      const dayElement = screen.getByText(day)
      expect(dayElement).toBeInTheDocument()
      // Hour strings repeat (12:00 - 20:00 ×3) — scope to the day's row.
      const row = dayElement.closest('li')!
      expect(within(row).getByText(hours)).toBeInTheDocument()
    }

    expect(screen.getAllByRole('listitem')).toHaveLength(7)
  })
})
