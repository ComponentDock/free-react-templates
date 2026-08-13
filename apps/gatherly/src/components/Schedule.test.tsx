import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Schedule } from './Schedule'
import { schedule } from '../data'

describe('Schedule', () => {
  it('renders the heading and four day tabs', () => {
    render(<Schedule />)
    expect(screen.getByRole('heading', { name: schedule.heading })).toBeInTheDocument()
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(4)
    expect(tabs[0]).toHaveTextContent('Day 01')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('shows day one entries with photo, time, title, description and credit', () => {
    render(<Schedule />)
    const firstDay = schedule.days[0]!
    expect(screen.getByRole('tabpanel')).toHaveAttribute('id', 'day-panel-0')
    for (const entry of firstDay.entries) {
      expect(screen.getByRole('heading', { name: entry.title })).toBeInTheDocument()
      expect(screen.getByText(entry.time)).toBeInTheDocument()
      expect(screen.getByText(entry.description)).toBeInTheDocument()
      expect(screen.getByText(`— ${entry.speaker}`)).toBeInTheDocument()
    }
  })

  it('switches the entry list when another day tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    const secondDay = schedule.days[1]!

    await user.click(screen.getByRole('tab', { name: /Day 02/ }))
    expect(screen.getByRole('tab', { name: /Day 02/ })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toHaveAttribute('id', 'day-panel-1')
    for (const entry of secondDay.entries) {
      expect(screen.getByRole('heading', { name: entry.title })).toBeInTheDocument()
    }
    // Day one entries are no longer rendered.
    for (const entry of schedule.days[0]!.entries) {
      expect(screen.queryByRole('heading', { name: entry.title })).not.toBeInTheDocument()
    }
  })

  it('labels each entry card with its speaker role', () => {
    render(<Schedule />)
    const firstEntry = schedule.days[0]!.entries[0]!
    const card = screen.getByRole('heading', { name: firstEntry.title }).closest('article')!
    expect(within(card).getByText(new RegExp(firstEntry.role))).toBeInTheDocument()
  })
})
