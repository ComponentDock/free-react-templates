import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Schedule } from './Schedule'
import { scheduleDays } from '../data'

describe('Schedule', () => {
  it('renders the heading, day tabs, and the first day talks by default', () => {
    render(<Schedule />)
    expect(screen.getByRole('heading', { name: 'Event Schedule' })).toBeInTheDocument()
    for (const day of scheduleDays) {
      expect(screen.getByRole('tab', { name: day.tab })).toBeInTheDocument()
    }
    const firstDay = scheduleDays[0]!
    const list = screen.getByRole('list', { name: `${firstDay.tab} talks` })
    expect(within(list).getAllByRole('listitem')).toHaveLength(firstDay.talks.length)
    for (const talk of firstDay.talks) {
      expect(within(list).getByText(talk.speakerName)).toBeInTheDocument()
      expect(within(list).getByText(talk.time)).toBeInTheDocument()
    }
  })

  it('switches the visible schedule when a day tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    const secondTab = screen.getByRole('tab', { name: '09 Sep 2019' })
    await user.click(secondTab)
    const secondDay = scheduleDays[1]!
    const list = screen.getByRole('list', { name: `${secondDay.tab} talks` })
    expect(within(list).getAllByRole('listitem')).toHaveLength(secondDay.talks.length)
    expect(within(list).getByText('Kelvin Cooper')).toBeInTheDocument()
  })
})
