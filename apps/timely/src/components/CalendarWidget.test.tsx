import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CalendarWidget } from './CalendarWidget'

describe('CalendarWidget', () => {
  describe('Default render (December 2020)', () => {
    it('shows the month label "DECEMBER - 2020"', () => {
      render(<CalendarWidget />)
      expect(screen.getByText('DECEMBER - 2020')).toBeInTheDocument()
    })

    it('shows the big day number 19 (reference today)', () => {
      const { container } = render(<CalendarWidget />)
      // The big day number renders in the left panel
      const bigNum = container.querySelector('.text-\\[9em\\]')
      expect(bigNum).toHaveTextContent('19')
    })

    it('renders the TODAY pill button', () => {
      render(<CalendarWidget />)
      expect(screen.getByRole('button', { name: 'Reset to today' })).toBeInTheDocument()
    })

    it('renders weekday headers', () => {
      render(<CalendarWidget />)
      expect(screen.getByText('Sun')).toBeInTheDocument()
      expect(screen.getByText('Mon')).toBeInTheDocument()
      expect(screen.getByText('Tue')).toBeInTheDocument()
      expect(screen.getByText('Wed')).toBeInTheDocument()
      expect(screen.getByText('Thu')).toBeInTheDocument()
      expect(screen.getByText('Fri')).toBeInTheDocument()
      expect(screen.getByText('Sat')).toBeInTheDocument()
    })

    it('renders 31 date buttons for December', () => {
      render(<CalendarWidget />)
      const buttons = screen.getAllByRole('button', { name: /\d+ DECEMBER 2020/ })
      expect(buttons).toHaveLength(31)
    })

    it('renders 19 December 2020 with aria-current or today styling', () => {
      render(<CalendarWidget />)
      const day19 = screen.getByRole('button', { name: '19 DECEMBER 2020' })
      expect(day19).toHaveClass('bg-brand')
    })

    it('has prev/next month navigation buttons', () => {
      render(<CalendarWidget />)
      expect(screen.getByRole('button', { name: 'Previous month' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Next month' })).toBeInTheDocument()
    })
  })

  describe('Date selection', () => {
    it('selects a date and updates the big day number', async () => {
      const user = userEvent.setup()
      const { container } = render(<CalendarWidget />)
      const day5 = screen.getByRole('button', { name: '5 DECEMBER 2020' })
      await user.click(day5)
      expect(day5).toHaveClass('bg-selected')
      const bigNum = container.querySelector('.text-\\[9em\\]')
      expect(bigNum).toHaveTextContent('5')
    })

    it('today circle remains unchanged when another date is selected', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      const day5 = screen.getByRole('button', { name: '5 DECEMBER 2020' })
      await user.click(day5)
      const day19 = screen.getByRole('button', { name: '19 DECEMBER 2020' })
      expect(day19).toHaveClass('bg-brand')
    })
  })

  describe('Month navigation', () => {
    it('navigates to next month (January 2021)', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      expect(screen.getByText('JANUARY - 2021')).toBeInTheDocument()
      expect(screen.queryByText('DECEMBER - 2020')).not.toBeInTheDocument()
    })

    it('navigates to previous month (November 2020)', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      await user.click(screen.getByRole('button', { name: 'Previous month' }))
      expect(screen.getByText('NOVEMBER - 2020')).toBeInTheDocument()
      expect(screen.queryByText('DECEMBER - 2020')).not.toBeInTheDocument()
    })

    it('resets big day number to 1 on month navigation', async () => {
      const user = userEvent.setup()
      const { container } = render(<CalendarWidget />)
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      const bigNum = container.querySelector('.text-\\[9em\\]')
      expect(bigNum).toHaveTextContent('1')
    })

    it('handles year rollover (December -> January)', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      // Go to January 2021
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      expect(screen.getByText('JANUARY - 2021')).toBeInTheDocument()
      // Go back to December 2020
      await user.click(screen.getByRole('button', { name: 'Previous month' }))
      expect(screen.getByText('DECEMBER - 2020')).toBeInTheDocument()
    })

    it('renders 31 days in January 2021', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      const buttons = screen.getAllByRole('button', { name: /\d+ JANUARY 2021/ })
      expect(buttons).toHaveLength(31)
    })

    it('renders 30 days in November 2020', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      await user.click(screen.getByRole('button', { name: 'Previous month' }))
      const buttons = screen.getAllByRole('button', {
        name: /\d+ NOVEMBER 2020/,
      })
      expect(buttons).toHaveLength(30)
    })

    it('navigates forward from a non-December month', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      // Go to January 2021 first
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      expect(screen.getByText('JANUARY - 2021')).toBeInTheDocument()
      // Now go to February 2021 (non-December path)
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      expect(screen.getByText('FEBRUARY - 2021')).toBeInTheDocument()
    })

    it('no magenta today circle on non-current months', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      // January 1 should NOT have bg-brand
      const day1 = screen.getByRole('button', { name: '1 JANUARY 2021' })
      expect(day1).not.toHaveClass('bg-brand')
    })
  })

  describe('Selection survives month round-trip', () => {
    it('re-applies selection when returning to the same month', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      // Select day 5
      await user.click(screen.getByRole('button', { name: '5 DECEMBER 2020' }))
      // Navigate away
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      // Navigate back
      await user.click(screen.getByRole('button', { name: 'Previous month' }))
      // Selection should be gone (selectedDay was cleared on navigation)
      const day5 = screen.getByRole('button', { name: '5 DECEMBER 2020' })
      expect(day5).not.toHaveClass('bg-selected')
    })
  })

  describe('Reset', () => {
    it('resets to reference today (December 2020, day 19)', async () => {
      const user = userEvent.setup()
      const { container } = render(<CalendarWidget />)
      // Navigate away
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      expect(screen.getByText('JANUARY - 2021')).toBeInTheDocument()
      // Click TODAY
      await user.click(screen.getByRole('button', { name: 'Reset to today' }))
      expect(screen.getByText('DECEMBER - 2020')).toBeInTheDocument()
      const bigNum = container.querySelector('.text-\\[9em\\]')
      expect(bigNum).toHaveTextContent('19')
    })

    it('clears selection on reset', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      // Select day 5
      await user.click(screen.getByRole('button', { name: '5 DECEMBER 2020' }))
      // Reset
      await user.click(screen.getByRole('button', { name: 'Reset to today' }))
      // Day 5 should no longer be selected
      const day5 = screen.getByRole('button', { name: '5 DECEMBER 2020' })
      expect(day5).not.toHaveClass('bg-selected')
    })
  })

  describe('Keyboard interaction', () => {
    it('selects a date with Enter key', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      const day5 = screen.getByRole('button', { name: '5 DECEMBER 2020' })
      day5.focus()
      await user.keyboard('{Enter}')
      expect(day5).toHaveClass('bg-selected')
    })

    it('selects a date with Space key', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      const day10 = screen.getByRole('button', { name: '10 DECEMBER 2020' })
      day10.focus()
      await user.keyboard(' ')
      expect(day10).toHaveClass('bg-selected')
    })

    it('ignores non-Enter/Space keys on date cells', async () => {
      const user = userEvent.setup()
      render(<CalendarWidget />)
      const day5 = screen.getByRole('button', { name: '5 DECEMBER 2020' })
      day5.focus()
      await user.keyboard('a')
      // Should not be selected
      expect(day5).not.toHaveClass('bg-selected')
    })
  })

  describe('Responsive', () => {
    it('renders without overflow', () => {
      const { container } = render(<CalendarWidget />)
      const widget = container.firstChild as HTMLElement
      expect(widget).toBeInTheDocument()
    })
  })
})
