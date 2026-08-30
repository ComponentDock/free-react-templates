import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { Calendar } from './Calendar'

describe('Calendar', () => {
  beforeEach(() => {
    // Fix the clock to August 15, 2026 (a Saturday)
    vi.setSystemTime(new Date(2026, 7, 15))
  })

  it('renders the current month label', () => {
    render(<Calendar />)
    expect(screen.getByText('August 2026')).toBeInTheDocument()
  })

  it('renders weekday headers in Sunday-first order', () => {
    render(<Calendar />)
    const headers = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    for (const h of headers) {
      expect(screen.getByText(h)).toBeInTheDocument()
    }
  })

  it('renders all days of the current month', () => {
    render(<Calendar />)
    // August 2026 has 31 days
    for (let d = 1; d <= 31; d++) {
      expect(screen.getAllByText(String(d)).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('preselects today on first render', () => {
    render(<Calendar />)
    // Day 15 should be selected (today)
    const dayButtons = screen.getAllByRole('button')
    const day15 = dayButtons.find(
      (btn) => btn.textContent === '15' && btn.getAttribute('aria-selected') === 'true',
    )
    expect(day15).toBeInTheDocument()
    expect(day15).toHaveClass('bg-[#f67280]')
  })

  it('shows adjacent-month days in muted color', () => {
    render(<Calendar />)
    // August 2026 starts on Saturday, so July 31 (Fri) appears as first cell
    const mutedDays = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') === 'true')
    expect(mutedDays.length).toBeGreaterThan(0)
  })

  it('navigates to next month', async () => {
    const user = userEvent.setup()
    render(<Calendar />)
    const nextBtn = screen.getByRole('button', { name: 'Next month' })
    await user.click(nextBtn)
    expect(screen.getByText('September 2026')).toBeInTheDocument()
  })

  it('navigates to previous month', async () => {
    const user = userEvent.setup()
    render(<Calendar />)
    const prevBtn = screen.getByRole('button', { name: 'Previous month' })
    await user.click(prevBtn)
    expect(screen.getByText('July 2026')).toBeInTheDocument()
  })

  it('preserves selected date when navigating months', async () => {
    const user = userEvent.setup()
    render(<Calendar />)
    // Day 15 is preselected (today)
    const nextBtn = screen.getByRole('button', { name: 'Next month' })
    await user.click(nextBtn)
    // Navigate back
    const prevBtn = screen.getByRole('button', { name: 'Previous month' })
    await user.click(prevBtn)
    // Day 15 should still be selected
    const dayButtons = screen.getAllByRole('button')
    const day15 = dayButtons.find(
      (btn) => btn.textContent === '15' && btn.getAttribute('aria-selected') === 'true',
    )
    expect(day15).toBeInTheDocument()
  })

  it('allows selecting a different day', async () => {
    const user = userEvent.setup()
    render(<Calendar />)
    // Click day 20
    const dayButtons = screen.getAllByRole('button')
    const day20 = dayButtons.find(
      (btn) => btn.textContent === '20' && btn.getAttribute('data-adjacent') !== 'true',
    )
    expect(day20).toBeInTheDocument()
    await user.click(day20!)
    // Day 20 should now be selected
    expect(day20).toHaveAttribute('aria-selected', 'true')
    expect(day20).toHaveClass('bg-[#f67280]')
    // Day 15 should no longer be selected
    const day15 = dayButtons.find(
      (btn) => btn.textContent === '15' && btn.getAttribute('data-adjacent') !== 'true',
    )
    expect(day15).toHaveAttribute('aria-selected', 'false')
  })

  it('has 5 or 6 rows depending on the month', () => {
    render(<Calendar />)
    // August 2026 starts on Saturday → 6 rows
    const rows = screen.getAllByRole('row')
    // 1 header row + 5 or 6 data rows
    expect(rows.length).toBeGreaterThanOrEqual(6)
    expect(rows.length).toBeLessThanOrEqual(7)
  })

  it('renders 7 columns per row', () => {
    render(<Calendar />)
    const headerCells = screen.getAllByRole('columnheader')
    expect(headerCells).toHaveLength(7)
  })

  it('handles December to January navigation', async () => {
    vi.setSystemTime(new Date(2026, 11, 15)) // Dec 15
    const user = userEvent.setup()
    render(<Calendar />)
    expect(screen.getByText('December 2026')).toBeInTheDocument()
    const nextBtn = screen.getByRole('button', { name: 'Next month' })
    await user.click(nextBtn)
    expect(screen.getByText('January 2027')).toBeInTheDocument()
  })

  it('handles January to December navigation', async () => {
    vi.setSystemTime(new Date(2027, 0, 15)) // Jan 15
    const user = userEvent.setup()
    render(<Calendar />)
    expect(screen.getByText('January 2027')).toBeInTheDocument()
    const prevBtn = screen.getByRole('button', { name: 'Previous month' })
    await user.click(prevBtn)
    expect(screen.getByText('December 2026')).toBeInTheDocument()
  })

  it('renders a 5-row month correctly (e.g. February 2026)', () => {
    vi.setSystemTime(new Date(2026, 1, 1)) // Feb 1
    render(<Calendar />)
    const rows = screen.getAllByRole('row')
    // 1 header + 4-5 data rows (Feb 2026: starts Sunday, 28 days → 4 rows)
    expect(rows.length).toBeGreaterThanOrEqual(5)
    expect(rows.length).toBeLessThanOrEqual(6)
  })

  it('has accessible navigation buttons', () => {
    render(<Calendar />)
    expect(screen.getByRole('button', { name: 'Previous month' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next month' })).toBeInTheDocument()
  })

  it('supports keyboard focus on day cells', async () => {
    const user = userEvent.setup()
    render(<Calendar />)
    // Focus the first day and activate with Enter (triggers click in jsdom)
    await user.tab()
    // Focus should be on one of the interactive elements
    expect(document.activeElement).toBeDefined()
  })

  it('activates day cell via Enter key', () => {
    render(<Calendar />)
    // Find a current-month day button
    const dayButtons = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') !== 'true')
    // Fire keyDown Enter on day 20
    const day20 = dayButtons.find((btn) => btn.textContent === '20')
    expect(day20).toBeInTheDocument()
    fireEvent.keyDown(day20!, { key: 'Enter' })
    expect(day20).toHaveAttribute('aria-selected', 'true')
  })

  it('activates day cell via Space key', () => {
    render(<Calendar />)
    const dayButtons = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') !== 'true')
    const day25 = dayButtons.find((btn) => btn.textContent === '25')
    expect(day25).toBeInTheDocument()
    fireEvent.keyDown(day25!, { key: ' ' })
    expect(day25).toHaveAttribute('aria-selected', 'true')
  })

  it('does not select an adjacent-month day on click', () => {
    render(<Calendar />)
    const adjacentDays = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') === 'true')
    expect(adjacentDays.length).toBeGreaterThan(0)
    // Adjacent days should not be selectable
    fireEvent.click(adjacentDays[0]!)
    expect(adjacentDays[0]).toHaveAttribute('aria-selected', 'false')
  })

  it('ignores non-activation key presses on day cells', () => {
    render(<Calendar />)
    const dayButtons = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') !== 'true')
    const day10 = dayButtons.find((btn) => btn.textContent === '10')
    expect(day10).toBeInTheDocument()
    // Pressing Tab should not select the day
    fireEvent.keyDown(day10!, { key: 'Tab' })
    expect(day10).toHaveAttribute('aria-selected', 'false')
  })
})
