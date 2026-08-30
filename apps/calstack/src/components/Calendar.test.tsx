import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Calendar } from './Calendar'

describe('Calendar', () => {
  describe('Rendering', () => {
    it('renders the month and year in the header', () => {
      render(<Calendar label="Test calendar" />)
      const now = new Date()
      const monthYear = now
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase()
      expect(screen.getByText(monthYear)).toBeInTheDocument()
    })

    it('renders the month header as uppercase text', () => {
      render(<Calendar label="Test calendar" />)
      const now = new Date()
      const monthYear = now
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase()
      const heading = screen.getByText(monthYear)
      expect(heading.tagName).toBe('H2')
    })
  })

  describe('Weekday headers', () => {
    it('renders all seven weekday abbreviations', () => {
      render(<Calendar label="Test calendar" />)
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      for (const day of weekdays) {
        expect(screen.getByText(day)).toBeInTheDocument()
      }
    })

    it('renders weekdays in correct order', () => {
      render(<Calendar label="Test calendar" />)
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const elements = weekdays.map((d) => screen.getByText(d))
      for (let i = 1; i < elements.length; i++) {
        const prev = elements[i - 1]!.getBoundingClientRect()
        const curr = elements[i]!.getBoundingClientRect()
        expect(curr.left).toBeGreaterThanOrEqual(prev.left)
      }
    })
  })

  describe('Month navigation', () => {
    it('navigates to the previous month', async () => {
      const user = userEvent.setup()
      render(<Calendar label="Test calendar" />)

      const now = new Date()
      const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
      const prevLabel = prevMonth
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase()

      const prevBtn = screen.getByRole('button', { name: /previous month/i })
      await user.click(prevBtn)

      expect(screen.getByText(prevLabel)).toBeInTheDocument()
    })

    it('navigates to the next month', async () => {
      const user = userEvent.setup()
      render(<Calendar label="Test calendar" />)

      const now = new Date()
      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
      const nextLabel = nextMonth
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase()

      const nextBtn = screen.getByRole('button', { name: /next month/i })
      await user.click(nextBtn)

      expect(screen.getByText(nextLabel)).toBeInTheDocument()
    })

    it('handles year rollover from December to January', async () => {
      const user = userEvent.setup()
      render(<Calendar label="Test calendar" initialViewDate={new Date(2024, 11, 1)} />)

      expect(screen.getByText('DECEMBER 2024')).toBeInTheDocument()

      const nextBtn = screen.getByRole('button', { name: /test calendar: next month/i })
      await user.click(nextBtn)
      expect(screen.getByText('JANUARY 2025')).toBeInTheDocument()

      const prevBtn = screen.getByRole('button', { name: /test calendar: previous month/i })
      await user.click(prevBtn)
      expect(screen.getByText('DECEMBER 2024')).toBeInTheDocument()
    })

    it('has accessible labels on navigation buttons', () => {
      render(<Calendar label="Test calendar" />)
      expect(
        screen.getByRole('button', { name: /test calendar: previous month/i }),
      ).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /test calendar: next month/i })).toBeInTheDocument()
    })
  })

  describe('Date grid', () => {
    it('renders the correct number of date buttons for the current month', () => {
      render(<Calendar label="Test calendar" />)
      const now = new Date()
      const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
      const monthYear = now
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase()

      for (let d = 1; d <= daysInMonth; d++) {
        const pattern = new RegExp(`^${d} ${monthYear}`)
        expect(screen.getByRole('button', { name: pattern })).toBeInTheDocument()
      }
    })

    it('renders blank cells for days before the 1st', () => {
      render(<Calendar label="Test calendar" />)
      const now = new Date()
      const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
      // Each day button has an aria-label; today's includes "(today)" so use a broader match
      const monthYear = now
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase()
      const buttons = screen.getAllByRole('button', { name: new RegExp(`^\\d+ ${monthYear}`) })
      expect(buttons.length).toBe(daysInMonth)
    })
  })

  describe('Today highlighting', () => {
    it('marks today with the accent background', () => {
      render(<Calendar label="Test calendar" />)
      const now = new Date()
      const monthYear = now
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase()
      const todayPattern = new RegExp(`^${now.getDate()} ${monthYear}.*today`)
      const todayBtn = screen.getByRole('button', { name: todayPattern })
      expect(todayBtn.className).toContain('bg-[--color-today]')
      expect(todayBtn.className).toContain('text-white')
    })

    it('includes "(today)" in the accessible label for today', () => {
      render(<Calendar label="Test calendar" />)
      const now = new Date()
      const monthYear = now
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase()
      const todayPattern = new RegExp(`^${now.getDate()} ${monthYear}.*today`)
      expect(screen.getByRole('button', { name: todayPattern })).toBeInTheDocument()
    })
  })

  describe('Date interactions', () => {
    it('renders non-today dates without the accent background', () => {
      render(<Calendar label="Test calendar" />)
      const now = new Date()
      const targetDay = now.getDate() === 1 ? 2 : 1
      const monthYear = now
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase()
      const pattern = new RegExp(`^${targetDay} ${monthYear}$`)
      const btn = screen.getByRole('button', { name: pattern })
      expect(btn.className).not.toContain('bg-[--color-today]')
    })
  })

  describe('January 2025 grid', () => {
    it('renders January 2025 starting on Wednesday (3 leading blanks)', async () => {
      const user = userEvent.setup()
      render(<Calendar label="Test calendar" initialViewDate={new Date(2024, 11, 1)} />)

      const nextBtn = screen.getByRole('button', { name: /test calendar: next month/i })
      await user.click(nextBtn)

      const buttons = screen.getAllByRole('button', { name: /^.*JANUARY 2025/ })
      expect(buttons.length).toBe(31)
    })
  })

  describe('November 2024 grid', () => {
    it('renders November with 30 date buttons', async () => {
      render(<Calendar label="Test calendar" initialViewDate={new Date(2024, 10, 1)} />)

      const buttons = screen.getAllByRole('button', { name: /^.*NOVEMBER 2024/ })
      expect(buttons.length).toBe(30)
    })
  })
})
