import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CalendarDashboard } from './CalendarDashboard'

describe('CalendarDashboard', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders three panel headings: Year, Month, Day', () => {
    render(<CalendarDashboard />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    const texts = headings.map((h) => h.textContent)
    expect(texts).toContain('Year')
    expect(texts).toContain('Month')
    expect(texts).toContain('Day')
  })

  it('displays the current year', () => {
    render(<CalendarDashboard />)
    const year = new Date().getFullYear()
    expect(screen.getByText(String(year))).toBeInTheDocument()
  })

  it('displays the previous and next year', () => {
    render(<CalendarDashboard />)
    const year = new Date().getFullYear()
    expect(screen.getByText(String(year - 1))).toBeInTheDocument()
    expect(screen.getByText(String(year + 1))).toBeInTheDocument()
  })

  it('displays the current month name', () => {
    render(<CalendarDashboard />)
    const monthName = new Date().toLocaleDateString('en-US', { month: 'long' })
    const monthElements = screen.getAllByText(monthName)
    expect(monthElements.length).toBeGreaterThanOrEqual(1)
  })

  it('displays the current day', () => {
    render(<CalendarDashboard />)
    const day = new Date().getDate()
    expect(screen.getByText(String(day))).toBeInTheDocument()
  })

  it('renders the section with id="calendar"', () => {
    const { container } = render(<CalendarDashboard />)
    expect(container.querySelector('#calendar')).toBeInTheDocument()
  })

  it('shows "Previous" labels in year and month panels', () => {
    render(<CalendarDashboard />)
    const prevLabels = screen.getAllByText('Previous')
    expect(prevLabels.length).toBe(2)
  })

  it('shows "Yesterday" and "Tomorrow" labels in the Day panel', () => {
    render(<CalendarDashboard />)
    expect(screen.getByText('Yesterday')).toBeInTheDocument()
    expect(screen.getByText('Tomorrow')).toBeInTheDocument()
  })

  it('shows "Next" labels in year and month panels', () => {
    render(<CalendarDashboard />)
    const nextLabels = screen.getAllByText('Next')
    expect(nextLabels.length).toBe(2)
  })

  it('wraps to December when month is January (month=0)', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 0, 15)) // January 15
    render(<CalendarDashboard />)
    // Previous month should be December
    expect(screen.getByText('December')).toBeInTheDocument()
    // Current month should be January
    const janElements = screen.getAllByText('January')
    expect(janElements.length).toBeGreaterThanOrEqual(1)
    // Next month should be February
    expect(screen.getByText('February')).toBeInTheDocument()
  })

  it('wraps to January when month is December (month=11)', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 11, 15)) // December 15
    render(<CalendarDashboard />)
    // Previous month should be November
    expect(screen.getByText('November')).toBeInTheDocument()
    // Current month should be December
    const decElements = screen.getAllByText('December')
    expect(decElements.length).toBeGreaterThanOrEqual(1)
    // Next month should be January
    expect(screen.getByText('January')).toBeInTheDocument()
  })

  it('shows day 28 as yesterday when current day is 1', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 7, 1)) // August 1
    render(<CalendarDashboard />)
    expect(screen.getByText('28')).toBeInTheDocument()
  })
})
