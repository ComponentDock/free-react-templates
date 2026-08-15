import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Schedule } from './Schedule'
import { scheduleEntries, scheduleEyebrow, scheduleLead, scheduleTitle } from '../data'

describe('Schedule', () => {
  it('renders the eyebrow, heading, intro, and the day tabs S M T W T F S', () => {
    render(<Schedule />)
    expect(screen.getByText(scheduleEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(scheduleTitle)
    expect(screen.getByText(scheduleLead)).toBeInTheDocument()
    const tabs = screen.getAllByRole('tab')
    expect(tabs.map((tab) => tab.textContent)).toEqual(['S', 'M', 'T', 'W', 'T', 'F', 'S'])
  })

  it('shows the active day pane with class entries', () => {
    render(<Schedule />)
    const activePane = screen.getByRole('tabpanel')
    expect(within(activePane).getByText(scheduleEntries[0]!.title)).toBeInTheDocument()
    // All five entries share the same day/time text — assert the count.
    expect(within(activePane).getAllByText('Sunday 7:30am - 9:00am').length).toBe(5)
  })

  it('switches the pane when a different day tab is activated', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    const tabs = screen.getAllByRole('tab')
    await user.click(tabs[1]!)
    const activePane = screen.getByRole('tabpanel')
    expect(within(activePane).getAllByText('Monday 7:30am - 9:00am').length).toBe(5)
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
  })
})
