import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Schedule } from './Schedule'
import { SCHEDULE } from '../data'

describe('Schedule', () => {
  it('renders the heading on the light-pink band with seven day tabs', () => {
    render(<Schedule />)

    const section = screen.getByRole('region', { name: 'Training Schedule' })
    expect(section).toHaveClass('bg-blush')
    expect(
      within(section).getByRole('heading', { level: 2, name: 'Training Schedule' }),
    ).toBeInTheDocument()

    const tablist = screen.getByRole('tablist', { name: 'Schedule days' })
    const tabs = within(tablist).getAllByRole('tab')
    expect(tabs).toHaveLength(SCHEDULE.length)
    SCHEDULE.forEach((day, i) => {
      expect(tabs[i]).toHaveTextContent(day.day)
      expect(tabs[i]).toHaveTextContent(day.program)
    })
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('shows Monday schedule cards with time, title and trainer attribution', () => {
    render(<Schedule />)

    const monday = SCHEDULE[0]!
    const panel = screen.getByRole('tabpanel', {
      name: `${monday.day} ${monday.program}`,
    })
    const cards = within(panel).getAllByRole('article')
    expect(cards).toHaveLength(monday.rows.length)

    const first = monday.rows[0]!
    expect(within(panel).getByText(first.time)).toBeInTheDocument()
    expect(within(panel).getByRole('heading', { level: 3, name: first.title })).toBeInTheDocument()
    expect(within(panel).getByText(new RegExp(`${first.coach}, ${first.role}`))).toBeInTheDocument()

    const photo = within(panel).getAllByRole('img')
    expect(photo).toHaveLength(monday.rows.length)
    expect(photo[0]).toHaveAttribute('src', first.photo)
  })

  it('switches the schedule cards when another day tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Schedule />)

    await user.click(screen.getByRole('tab', { name: /Wednesday/ }))

    expect(screen.getByRole('tab', { name: /Wednesday/ })).toHaveAttribute('aria-selected', 'true')
    const wednesday = SCHEDULE[2]!
    const monday = SCHEDULE[0]!
    const panel = screen.getByRole('tabpanel', {
      name: `${wednesday.day} ${wednesday.program}`,
    })
    expect(
      within(panel).getByRole('heading', { level: 3, name: wednesday.rows[0]!.title }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('tabpanel', { name: `${monday.day} ${monday.program}` }),
    ).not.toBeInTheDocument()
  })
})
