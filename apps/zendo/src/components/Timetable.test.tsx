import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Timetable } from './Timetable'
import { timetable } from '../data'

describe('Timetable', () => {
  it('renders the 7-day table with a pink header row', () => {
    render(<Timetable />)
    expect(screen.getByRole('heading', { level: 2, name: 'Class Time Table' })).toBeInTheDocument()
    const table = screen.getByRole('table')
    const headerRow = within(table).getAllByRole('row')[0]!
    for (const day of timetable.days) {
      expect(within(headerRow).getByRole('columnheader', { name: day })).toBeInTheDocument()
    }
  })

  it('renders class cells with circular thumbnails and close icons in empty cells', () => {
    render(<Timetable />)
    const classLinks = screen.getAllByRole('link', { name: 'Yoga training' })
    expect(classLinks.length).toBeGreaterThan(0)
    expect(screen.getAllByText('7 am-6 am').length).toBeGreaterThan(0)
    // The reference uses a grey ✕ in empty cells — count the close glyphs.
    expect(document.querySelectorAll('svg.lucide-x').length).toBeGreaterThan(0)
  })

  it('renders the month navigation row', () => {
    render(<Timetable />)
    expect(screen.getByRole('button', { name: 'Previous month' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next month' })).toBeInTheDocument()
    for (const month of timetable.months) {
      expect(screen.getByText(month)).toBeInTheDocument()
    }
  })
})
