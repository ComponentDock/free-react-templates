import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Schedule } from './Schedule'
import { SCHEDULE_HEAD } from '../data'

describe('Schedule', () => {
  it('renders the heading and a table with red header row and 6 class rows', () => {
    render(<Schedule />)

    expect(screen.getByRole('heading', { level: 2, name: 'Get Your Schedule' })).toBeInTheDocument()

    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
    const headerRow = screen.getByRole('row', { name: /Course Name/ })
    expect(headerRow.querySelector('th')?.textContent).toBe('Course Name')

    SCHEDULE_HEAD.forEach((head) => {
      expect(screen.getAllByText(head).length).toBeGreaterThanOrEqual(1)
    })

    const rows = screen.getAllByRole('row')
    // 1 header row + 6 schedule rows
    expect(rows).toHaveLength(7)

    const aeroCells = screen.getAllByText('Fitness Aero')
    expect(aeroCells).toHaveLength(6)
    expect(screen.getAllByText('02.00')).toHaveLength(12)
    expect(screen.getAllByText('10.10')).toHaveLength(6)
  })
})
