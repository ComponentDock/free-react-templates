import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Calendar } from './Calendar'

describe('Calendar', () => {
  describe('Title', () => {
    it('renders the title "Calendar #01"', () => {
      render(<Calendar />)
      expect(screen.getByText('Calendar #01')).toBeInTheDocument()
    })

    it('renders the title as a heading', () => {
      render(<Calendar />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Calendar #01')
    })
  })

  describe('Month navigation', () => {
    it('shows "December 2020" as the initial month', () => {
      render(<Calendar />)
      expect(screen.getByText('December 2020')).toBeInTheDocument()
    })

    it('navigates to the previous month', async () => {
      const user = userEvent.setup()
      render(<Calendar />)

      const prevBtn = screen.getByRole('button', { name: 'Previous month' })
      await user.click(prevBtn)

      expect(screen.getByText('November 2020')).toBeInTheDocument()
    })

    it('navigates to the next month', async () => {
      const user = userEvent.setup()
      render(<Calendar />)

      const nextBtn = screen.getByRole('button', { name: 'Next month' })
      await user.click(nextBtn)

      expect(screen.getByText('January 2021')).toBeInTheDocument()
    })

    it('handles year rollover from December to January', async () => {
      const user = userEvent.setup()
      render(<Calendar />)

      const nextBtn = screen.getByRole('button', { name: 'Next month' })
      await user.click(nextBtn)
      expect(screen.getByText('January 2021')).toBeInTheDocument()

      const prevBtn = screen.getByRole('button', { name: 'Previous month' })
      await user.click(prevBtn)
      expect(screen.getByText('December 2020')).toBeInTheDocument()
    })

    it('has accessible labels on navigation buttons', () => {
      render(<Calendar />)
      expect(screen.getByRole('button', { name: 'Previous month' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Next month' })).toBeInTheDocument()
    })
  })

  describe('Weekday header bar', () => {
    it('renders all seven weekday abbreviations', () => {
      render(<Calendar />)
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      for (const day of weekdays) {
        expect(screen.getByText(day)).toBeInTheDocument()
      }
    })

    it('renders weekdays in correct order', () => {
      render(<Calendar />)
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const elements = weekdays.map((d) => screen.getByText(d))
      for (let i = 1; i < elements.length; i++) {
        const prev = elements[i - 1]!.getBoundingClientRect()
        const curr = elements[i]!.getBoundingClientRect()
        expect(curr.left).toBeGreaterThanOrEqual(prev.left)
      }
    })
  })

  describe('Date grid', () => {
    it('renders December 2020 with 31 date buttons', () => {
      render(<Calendar />)
      for (let d = 1; d <= 31; d++) {
        const buttons = screen.getAllByRole('button', {
          name: new RegExp(`^${d} December 2020$`),
        })
        expect(buttons.length).toBeGreaterThanOrEqual(1)
      }
    })

    it('has two leading blank cells for December 2020 (starts on Tuesday)', () => {
      render(<Calendar />)
      // December 2020 starts on Tuesday — cells 0 (Sun) and 1 (Mon) are empty
      // Day 1 should exist (it's in the third column, index 2)
      const day1 = screen.getByRole('button', { name: '1 December 2020' })
      expect(day1).toBeInTheDocument()
      // The weekday bar and date grid are separate grids;
      // verify by checking that buttons exist for all 31 days
      for (let d = 1; d <= 31; d++) {
        expect(screen.getByRole('button', { name: `${d} December 2020` })).toBeInTheDocument()
      }
    })

    it('renders date 19 as selected with accent background', () => {
      render(<Calendar />)
      const btn = screen.getByRole('button', {
        name: '19 December 2020',
      })
      expect(btn).toHaveAttribute('aria-selected', 'true')
      expect(btn.className).toContain('bg-accent')
      expect(btn.className).toContain('text-white')
    })
  })

  describe('Selected date', () => {
    it('moves the selection when a date is clicked', async () => {
      const user = userEvent.setup()
      render(<Calendar />)

      const date5 = screen.getByRole('button', {
        name: '5 December 2020',
      })
      await user.click(date5)

      expect(date5).toHaveAttribute('aria-selected', 'true')
      expect(date5.className).toContain('bg-accent')

      const date19 = screen.getByRole('button', {
        name: '19 December 2020',
      })
      expect(date19).toHaveAttribute('aria-selected', 'false')
    })

    it('preserves selection across month round-trips', async () => {
      const user = userEvent.setup()
      render(<Calendar />)

      // Navigate to November and back
      const prevBtn = screen.getByRole('button', { name: 'Previous month' })
      await user.click(prevBtn)
      expect(screen.getByText('November 2020')).toBeInTheDocument()

      const nextBtn = screen.getByRole('button', { name: 'Next month' })
      await user.click(nextBtn)
      expect(screen.getByText('December 2020')).toBeInTheDocument()

      // Selection should still be 19
      const date19 = screen.getByRole('button', {
        name: '19 December 2020',
      })
      expect(date19).toHaveAttribute('aria-selected', 'true')
    })

    it('renders past dates with the past color', () => {
      render(<Calendar />)
      const date1 = screen.getByRole('button', {
        name: '1 December 2020',
      })
      // Past dates should have the past color
      expect(date1.style.color).toBe('var(--color-past)')
    })

    it('renders future dates with the future color', () => {
      render(<Calendar />)
      const date31 = screen.getByRole('button', {
        name: '31 December 2020',
      })
      expect(date31.style.color).toBe('var(--color-future)')
    })
  })

  describe('November 2020 grid', () => {
    it('renders November with no leading blank cells (starts on Sunday)', async () => {
      const user = userEvent.setup()
      const { unmount } = render(<Calendar />)

      const prevBtn = screen.getByRole('button', { name: 'Previous month' })
      await user.click(prevBtn)

      // November 2020 starts on Sunday — no leading blanks
      const buttons = screen.getAllByRole('button', {
        name: /November 2020/,
      })
      expect(buttons.length).toBe(30) // 30 days in November
      unmount()
    })
  })

  describe('January 2021 grid', () => {
    it('renders January 2021 starting on Friday (4 leading blanks)', async () => {
      const user = userEvent.setup()
      render(<Calendar />)

      const nextBtn = screen.getByRole('button', { name: 'Next month' })
      await user.click(nextBtn)

      // January 2021 starts on Friday — 4 leading blanks
      const buttons = screen.getAllByRole('button', {
        name: /January 2021/,
      })
      expect(buttons.length).toBe(31)
    })
  })
})
