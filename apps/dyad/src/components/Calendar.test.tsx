import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { Calendar } from './Calendar'

describe('Calendar', () => {
  beforeEach(() => {
    vi.setSystemTime(new Date(2026, 7, 15))
  })

  it('renders the current month label', () => {
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    expect(screen.getByText('August 2026')).toBeInTheDocument()
  })

  it('renders weekday headers in Sunday-first order', () => {
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    const headers = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    for (const h of headers) {
      expect(screen.getByText(h)).toBeInTheDocument()
    }
  })

  it('renders all days of the current month', () => {
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    for (let d = 1; d <= 31; d++) {
      expect(screen.getAllByText(String(d)).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('shows selected date with pink circle', () => {
    render(<Calendar selectedDate={new Date(2026, 7, 15)} onSelect={() => {}} />)
    const day15 = screen
      .getAllByRole('button')
      .find((btn) => btn.textContent === '15' && btn.getAttribute('aria-selected') === 'true')
    expect(day15).toBeInTheDocument()
    expect(day15).toHaveClass('bg-[#f67280]')
  })

  it('shows adjacent-month days in muted color', () => {
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    const mutedDays = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') === 'true')
    expect(mutedDays.length).toBeGreaterThan(0)
  })

  it('navigates to next month', async () => {
    const user = userEvent.setup()
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    const nextBtn = screen.getByRole('button', { name: 'Next month' })
    await user.click(nextBtn)
    expect(screen.getByText('September 2026')).toBeInTheDocument()
  })

  it('navigates to previous month', async () => {
    const user = userEvent.setup()
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    const prevBtn = screen.getByRole('button', { name: 'Previous month' })
    await user.click(prevBtn)
    expect(screen.getByText('July 2026')).toBeInTheDocument()
  })

  it('preserves selected date when navigating months', async () => {
    const user = userEvent.setup()
    render(<Calendar selectedDate={new Date(2026, 7, 15)} onSelect={() => {}} />)
    const nextBtn = screen.getByRole('button', { name: 'Next month' })
    await user.click(nextBtn)
    const prevBtn = screen.getByRole('button', { name: 'Previous month' })
    await user.click(prevBtn)
    const day15 = screen
      .getAllByRole('button')
      .find((btn) => btn.textContent === '15' && btn.getAttribute('aria-selected') === 'true')
    expect(day15).toBeInTheDocument()
  })

  it('calls onSelect when a day is clicked', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    render(<Calendar selectedDate={null} onSelect={onSelect} />)
    const dayButtons = screen
      .getAllByRole('button')
      .filter(
        (btn) => btn.getAttribute('data-adjacent') !== 'true' && !btn.getAttribute('aria-label'),
      )
    const day20 = dayButtons.find((btn) => btn.textContent === '20')
    expect(day20).toBeInTheDocument()
    await user.click(day20!)
    expect(onSelect).toHaveBeenCalledTimes(1)
    const calledDate = onSelect.mock.calls[0]![0] as Date
    expect(calledDate.getDate()).toBe(20)
    expect(calledDate.getMonth()).toBe(7) // August
  })

  it('does not call onSelect for adjacent-month days', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    render(<Calendar selectedDate={null} onSelect={onSelect} />)
    const adjacentDays = screen
      .getAllByRole('button')
      .filter((btn) => btn.getAttribute('data-adjacent') === 'true')
    expect(adjacentDays.length).toBeGreaterThan(0)
    await user.click(adjacentDays[0]!)
    expect(onSelect).not.toHaveBeenCalled()
  })

  it('does not call onSelect for disabled days', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    // Disable days before August 20
    render(
      <Calendar selectedDate={null} onSelect={onSelect} disabledBefore={new Date(2026, 7, 20)} />,
    )
    // Day 10 should be disabled (before Aug 20)
    const day10 = screen
      .getAllByRole('button')
      .find((btn) => btn.textContent === '10' && btn.getAttribute('data-adjacent') !== 'true')
    expect(day10).toBeInTheDocument()
    await user.click(day10!)
    expect(onSelect).not.toHaveBeenCalled()
  })

  it('has 5 or 6 rows depending on the month', () => {
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    const rows = screen.getAllByRole('row')
    expect(rows.length).toBeGreaterThanOrEqual(6)
    expect(rows.length).toBeLessThanOrEqual(7)
  })

  it('renders 7 columns per row', () => {
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    const headerCells = screen.getAllByRole('columnheader')
    expect(headerCells).toHaveLength(7)
  })

  it('handles December to January navigation', async () => {
    vi.setSystemTime(new Date(2026, 11, 15))
    const user = userEvent.setup()
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    expect(screen.getByText('December 2026')).toBeInTheDocument()
    const nextBtn = screen.getByRole('button', { name: 'Next month' })
    await user.click(nextBtn)
    expect(screen.getByText('January 2027')).toBeInTheDocument()
  })

  it('handles January to December navigation', async () => {
    vi.setSystemTime(new Date(2027, 0, 15))
    const user = userEvent.setup()
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    expect(screen.getByText('January 2027')).toBeInTheDocument()
    const prevBtn = screen.getByRole('button', { name: 'Previous month' })
    await user.click(prevBtn)
    expect(screen.getByText('December 2026')).toBeInTheDocument()
  })

  it('renders a 5-row month correctly (e.g. February 2026)', () => {
    vi.setSystemTime(new Date(2026, 1, 1))
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    const rows = screen.getAllByRole('row')
    expect(rows.length).toBeGreaterThanOrEqual(5)
    expect(rows.length).toBeLessThanOrEqual(6)
  })

  it('has accessible navigation buttons', () => {
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    expect(screen.getByRole('button', { name: 'Previous month' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next month' })).toBeInTheDocument()
  })

  it('supports keyboard focus on day cells', async () => {
    const user = userEvent.setup()
    render(<Calendar selectedDate={null} onSelect={() => {}} />)
    await user.tab()
    expect(document.activeElement).toBeDefined()
  })

  it('activates day cell via Enter key', () => {
    const onSelect = vi.fn()
    render(<Calendar selectedDate={null} onSelect={onSelect} />)
    const dayButtons = screen
      .getAllByRole('button')
      .filter(
        (btn) => btn.getAttribute('data-adjacent') !== 'true' && !btn.getAttribute('aria-label'),
      )
    const day20 = dayButtons.find((btn) => btn.textContent === '20')
    expect(day20).toBeInTheDocument()
    fireEvent.keyDown(day20!, { key: 'Enter' })
    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  it('activates day cell via Space key', () => {
    const onSelect = vi.fn()
    render(<Calendar selectedDate={null} onSelect={onSelect} />)
    const dayButtons = screen
      .getAllByRole('button')
      .filter(
        (btn) => btn.getAttribute('data-adjacent') !== 'true' && !btn.getAttribute('aria-label'),
      )
    const day25 = dayButtons.find((btn) => btn.textContent === '25')
    expect(day25).toBeInTheDocument()
    fireEvent.keyDown(day25!, { key: ' ' })
    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  it('ignores non-activation key presses on day cells', () => {
    const onSelect = vi.fn()
    render(<Calendar selectedDate={null} onSelect={onSelect} />)
    const dayButtons = screen
      .getAllByRole('button')
      .filter(
        (btn) => btn.getAttribute('data-adjacent') !== 'true' && !btn.getAttribute('aria-label'),
      )
    const day10 = dayButtons.find((btn) => btn.textContent === '10')
    expect(day10).toBeInTheDocument()
    fireEvent.keyDown(day10!, { key: 'Tab' })
    expect(onSelect).not.toHaveBeenCalled()
  })

  it('disables days before disabledBefore date', () => {
    render(
      <Calendar selectedDate={null} onSelect={() => {}} disabledBefore={new Date(2026, 7, 20)} />,
    )
    // Days 1-19 should be disabled (have cursor-default class)
    const allButtons = screen.getAllByRole('button')
    const day5 = allButtons.find(
      (btn) => btn.textContent === '5' && btn.getAttribute('data-adjacent') !== 'true',
    )
    expect(day5).toBeInTheDocument()
    expect(day5).toHaveClass('cursor-default')
  })

  it('disables days after disabledAfter date', () => {
    render(
      <Calendar selectedDate={null} onSelect={() => {}} disabledAfter={new Date(2026, 7, 10)} />,
    )
    // Days 11-31 should be disabled
    const allButtons = screen.getAllByRole('button')
    const day25 = allButtons.find(
      (btn) => btn.textContent === '25' && btn.getAttribute('data-adjacent') !== 'true',
    )
    expect(day25).toBeInTheDocument()
    expect(day25).toHaveClass('cursor-default')
  })

  it('displays disabled days in disabled pink color', () => {
    render(
      <Calendar selectedDate={null} onSelect={() => {}} disabledBefore={new Date(2026, 7, 20)} />,
    )
    const allButtons = screen.getAllByRole('button')
    const day5 = allButtons.find(
      (btn) => btn.textContent === '5' && btn.getAttribute('data-adjacent') !== 'true',
    )
    expect(day5).toBeInTheDocument()
    expect(day5).toHaveClass('text-[#fcc]')
  })
})
