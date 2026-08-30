import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { Calendar } from './Calendar'

describe('Calendar', () => {
  let onDateChange: ReturnType<typeof vi.fn<(date: Date) => void>>

  beforeEach(() => {
    vi.setSystemTime(new Date(2026, 7, 15))
    onDateChange = vi.fn()
  })

  it('renders the current month label', () => {
    render(<Calendar onDateChange={onDateChange} />)
    expect(screen.getByText('August 2026')).toBeInTheDocument()
  })

  it('renders weekday headers in Sunday-first order', () => {
    render(<Calendar onDateChange={onDateChange} />)
    const headers = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    for (const h of headers) {
      expect(screen.getByText(h)).toBeInTheDocument()
    }
  })

  it('renders all days of the current month', () => {
    render(<Calendar onDateChange={onDateChange} />)
    for (let d = 1; d <= 31; d++) {
      expect(screen.getAllByText(String(d)).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('preselects today on first render', () => {
    render(<Calendar onDateChange={onDateChange} />)
    const dayButtons = screen.getAllByRole('button')
    const day15 = dayButtons.find(
      (btn) => btn.textContent === '15' && btn.getAttribute('aria-selected') === 'true',
    )
    expect(day15).toBeInTheDocument()
    expect(day15).toHaveClass('bg-[#f67280]')
  })

  it('calls onDateChange with today on mount', () => {
    render(<Calendar onDateChange={onDateChange} />)
    expect(onDateChange).toHaveBeenCalledWith(new Date(2026, 7, 15))
  })

  it('shows adjacent-month days in muted color', () => {
    render(<Calendar onDateChange={onDateChange} />)
    const mutedDays = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') === 'true')
    expect(mutedDays.length).toBeGreaterThan(0)
  })

  it('navigates to next month', async () => {
    const user = userEvent.setup()
    render(<Calendar onDateChange={onDateChange} />)
    const nextBtn = screen.getByRole('button', { name: 'Next month' })
    await user.click(nextBtn)
    expect(screen.getByText('September 2026')).toBeInTheDocument()
  })

  it('navigates to previous month', async () => {
    const user = userEvent.setup()
    render(<Calendar onDateChange={onDateChange} />)
    const prevBtn = screen.getByRole('button', { name: 'Previous month' })
    await user.click(prevBtn)
    expect(screen.getByText('July 2026')).toBeInTheDocument()
  })

  it('preserves selected date when navigating months', async () => {
    const user = userEvent.setup()
    render(<Calendar onDateChange={onDateChange} />)
    const nextBtn = screen.getByRole('button', { name: 'Next month' })
    await user.click(nextBtn)
    const prevBtn = screen.getByRole('button', { name: 'Previous month' })
    await user.click(prevBtn)
    const dayButtons = screen.getAllByRole('button')
    const day15 = dayButtons.find(
      (btn) => btn.textContent === '15' && btn.getAttribute('aria-selected') === 'true',
    )
    expect(day15).toBeInTheDocument()
  })

  it('calls onDateChange when selecting a day', async () => {
    const user = userEvent.setup()
    render(<Calendar onDateChange={onDateChange} />)
    onDateChange.mockClear()
    const dayButtons = screen.getAllByRole('button')
    const day20 = dayButtons.find(
      (btn) => btn.textContent === '20' && btn.getAttribute('data-adjacent') !== 'true',
    )
    expect(day20).toBeInTheDocument()
    await user.click(day20!)
    expect(onDateChange).toHaveBeenCalledWith(new Date(2026, 7, 20))
  })

  it('has 5 or 6 rows depending on the month', () => {
    render(<Calendar onDateChange={onDateChange} />)
    const rows = screen.getAllByRole('row')
    expect(rows.length).toBeGreaterThanOrEqual(6)
    expect(rows.length).toBeLessThanOrEqual(7)
  })

  it('renders 7 columns per row', () => {
    render(<Calendar onDateChange={onDateChange} />)
    const headerCells = screen.getAllByRole('columnheader')
    expect(headerCells).toHaveLength(7)
  })

  it('handles December to January navigation', async () => {
    vi.setSystemTime(new Date(2026, 11, 15))
    const user = userEvent.setup()
    render(<Calendar onDateChange={onDateChange} />)
    expect(screen.getByText('December 2026')).toBeInTheDocument()
    const nextBtn = screen.getByRole('button', { name: 'Next month' })
    await user.click(nextBtn)
    expect(screen.getByText('January 2027')).toBeInTheDocument()
  })

  it('handles January to December navigation', async () => {
    vi.setSystemTime(new Date(2027, 0, 15))
    const user = userEvent.setup()
    render(<Calendar onDateChange={onDateChange} />)
    expect(screen.getByText('January 2027')).toBeInTheDocument()
    const prevBtn = screen.getByRole('button', { name: 'Previous month' })
    await user.click(prevBtn)
    expect(screen.getByText('December 2026')).toBeInTheDocument()
  })

  it('has accessible navigation buttons', () => {
    render(<Calendar onDateChange={onDateChange} />)
    expect(screen.getByRole('button', { name: 'Previous month' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next month' })).toBeInTheDocument()
  })

  it('activates day cell via Enter key', () => {
    render(<Calendar onDateChange={onDateChange} />)
    const dayButtons = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') !== 'true')
    const day20 = dayButtons.find((btn) => btn.textContent === '20')
    expect(day20).toBeInTheDocument()
    fireEvent.keyDown(day20!, { key: 'Enter' })
    expect(day20).toHaveAttribute('aria-selected', 'true')
  })

  it('activates day cell via Space key', () => {
    render(<Calendar onDateChange={onDateChange} />)
    const dayButtons = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') !== 'true')
    const day25 = dayButtons.find((btn) => btn.textContent === '25')
    expect(day25).toBeInTheDocument()
    fireEvent.keyDown(day25!, { key: ' ' })
    expect(day25).toHaveAttribute('aria-selected', 'true')
  })

  it('does not select an adjacent-month day on click', () => {
    render(<Calendar onDateChange={onDateChange} />)
    const adjacentDays = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') === 'true')
    expect(adjacentDays.length).toBeGreaterThan(0)
    fireEvent.click(adjacentDays[0]!)
    expect(adjacentDays[0]).toHaveAttribute('aria-selected', 'false')
  })

  it('ignores non-activation key presses on day cells', () => {
    render(<Calendar onDateChange={onDateChange} />)
    const dayButtons = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') !== 'true')
    const day10 = dayButtons.find((btn) => btn.textContent === '10')
    expect(day10).toBeInTheDocument()
    fireEvent.keyDown(day10!, { key: 'Tab' })
    expect(day10).toHaveAttribute('aria-selected', 'false')
  })

  it('renders a 28-day month with no trailing adjacent days (Feb 2026)', () => {
    vi.setSystemTime(new Date(2026, 1, 1)) // Feb 1, 2026 (Sunday)
    render(<Calendar onDateChange={onDateChange} />)
    // February 2026: starts Sunday, 28 days → exactly 4 rows, no trailing days
    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(5) // 1 header + 4 data rows
    const adjacentDays = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') === 'true')
    expect(adjacentDays.length).toBe(0)
  })
})
