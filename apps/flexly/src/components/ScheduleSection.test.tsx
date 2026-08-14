import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ScheduleSection } from './ScheduleSection'
import { SCHEDULE } from '../data'

describe('ScheduleSection', () => {
  it('renders seven day tabs with Monday active and its coach rows', () => {
    render(<ScheduleSection />)

    const tablist = screen.getByRole('tablist', { name: 'Days' })
    const tabs = within(tablist).getAllByRole('tab')
    expect(tabs).toHaveLength(SCHEDULE.length)
    tabs.forEach((tab, i) => {
      expect(tab).toHaveTextContent(SCHEDULE[i]!.day)
      expect(tab).toHaveTextContent(SCHEDULE[i]!.program)
    })
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')

    const panel = screen.getByRole('tabpanel', { name: /Monday/ })
    const firstRow = SCHEDULE[0]!.rows[0]!
    expect(within(panel).getByText(firstRow.time)).toBeInTheDocument()
    expect(within(panel).getByRole('heading', { name: firstRow.title })).toBeInTheDocument()
    expect(within(panel).getByText(new RegExp(firstRow.coach))).toBeInTheDocument()
  })

  it('switches panels when another day is clicked', async () => {
    const user = userEvent.setup()
    render(<ScheduleSection />)

    await user.click(screen.getByRole('tab', { name: /Wednesday/ }))

    expect(screen.getByRole('tab', { name: /Wednesday/ })).toHaveAttribute('aria-selected', 'true')
    const panel = screen.getByRole('tabpanel', { name: /Wednesday/ })
    expect(within(panel).getByRole('heading', { name: 'Aerobic Dance' })).toBeInTheDocument()
    expect(screen.queryByRole('tabpanel', { name: /Monday/ })).not.toBeInTheDocument()
  })
})
