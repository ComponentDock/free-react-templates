import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CalendarGrid } from './CalendarGrid'

describe('CalendarGrid', () => {
  const mockOnSelectDate = vi.fn<(date: Date) => void>()
  const today = new Date()

  it('renders the current month name', () => {
    render(<CalendarGrid selectedDate={today} onSelectDate={mockOnSelectDate} events={[]} />)
    const monthName = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    expect(screen.getByText(monthName)).toBeInTheDocument()
  })

  it('renders all seven weekday abbreviations', () => {
    render(<CalendarGrid selectedDate={today} onSelectDate={mockOnSelectDate} events={[]} />)
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    for (const day of weekdays) {
      expect(screen.getByText(day)).toBeInTheDocument()
    }
  })

  it('has a region role with accessible label', () => {
    render(<CalendarGrid selectedDate={today} onSelectDate={mockOnSelectDate} events={[]} />)
    expect(screen.getByRole('region', { name: /calendar grid/i })).toBeInTheDocument()
  })

  it('renders correct number of date buttons for current month', () => {
    render(<CalendarGrid selectedDate={today} onSelectDate={mockOnSelectDate} events={[]} />)
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
    const monthName = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    const buttons = screen.getAllByRole('button', { name: new RegExp(`^\\d+ ${monthName}`) })
    expect(buttons.length).toBe(daysInMonth)
  })

  it('navigates to the previous month', async () => {
    const user = userEvent.setup()
    render(<CalendarGrid selectedDate={today} onSelectDate={mockOnSelectDate} events={[]} />)

    const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1)
    const prevMonthName = prevMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

    await user.click(screen.getByRole('button', { name: /previous month/i }))
    expect(screen.getByText(prevMonthName)).toBeInTheDocument()
  })

  it('navigates to the next month', async () => {
    const user = userEvent.setup()
    render(<CalendarGrid selectedDate={today} onSelectDate={mockOnSelectDate} events={[]} />)

    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1)
    const nextMonthName = nextMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

    await user.click(screen.getByRole('button', { name: /next month/i }))
    expect(screen.getByText(nextMonthName)).toBeInTheDocument()
  })

  it('calls onSelectDate when clicking a date cell', async () => {
    const user = userEvent.setup()
    render(<CalendarGrid selectedDate={today} onSelectDate={mockOnSelectDate} events={[]} />)

    const monthName = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    const dayBtn = screen.getByRole('button', { name: new RegExp(`^1 ${monthName}`) })
    await user.click(dayBtn)
    expect(mockOnSelectDate).toHaveBeenCalled()
  })

  it('highlights today with indigo styling', () => {
    render(<CalendarGrid selectedDate={today} onSelectDate={mockOnSelectDate} events={[]} />)
    const monthName = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    const todayBtn = screen.getByRole('button', {
      name: new RegExp(`^${today.getDate()} ${monthName}.*today`),
    })
    // Today button has indigo ring + bold text
    expect(todayBtn.className).toContain('ring-indigo-600')
    expect(todayBtn.className).toContain('font-bold')
  })

  it('shows event badges on dates with events', () => {
    const y = today.getFullYear()
    const m = String(today.getMonth() + 1).padStart(2, '0')
    const d = String(today.getDate()).padStart(2, '0')
    const dateString = `${y}-${m}-${d}`

    render(
      <CalendarGrid
        selectedDate={today}
        onSelectDate={mockOnSelectDate}
        events={[{ date: dateString, title: 'Sprint Review' }]}
      />,
    )
    expect(screen.getByText('Sprint Review')).toBeInTheDocument()
  })

  it('shows +N more when more than 2 events on a day', () => {
    const y = today.getFullYear()
    const m = String(today.getMonth() + 1).padStart(2, '0')
    const d = String(today.getDate()).padStart(2, '0')
    const dateString = `${y}-${m}-${d}`

    render(
      <CalendarGrid
        selectedDate={today}
        onSelectDate={mockOnSelectDate}
        events={[
          { date: dateString, title: 'Event 1' },
          { date: dateString, title: 'Event 2' },
          { date: dateString, title: 'Event 3' },
        ]}
      />,
    )
    expect(screen.getByText('+1 more')).toBeInTheDocument()
  })

  it('renders empty cells for days before the 1st', () => {
    render(
      <CalendarGrid
        selectedDate={new Date(2024, 1, 1)}
        onSelectDate={mockOnSelectDate}
        events={[]}
      />,
    )
    // February 2024 starts on Thursday — 4 leading empty cells
    const monthName = 'February 2024'
    const buttons = screen.getAllByRole('button', { name: new RegExp(`^\\d+ ${monthName}`) })
    expect(buttons.length).toBe(29) // 2024 is a leap year
  })
})
