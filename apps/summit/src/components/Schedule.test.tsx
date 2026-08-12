import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { SCHEDULE_DAYS } from '../data'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders three day tabs and Monday\u2019s four sessions by default', () => {
    render(<Schedule />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Schedule Plan')).toBeInTheDocument()
    const monday = SCHEDULE_DAYS[0]!
    for (const session of monday.sessions) {
      expect(screen.getByRole('heading', { level: 5, name: session.title })).toBeInTheDocument()
    }
  })

  it('switches the visible session cards when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByRole('tab', { name: /Tuesday/i }))
    expect(screen.getByRole('tab', { name: /Tuesday/i })).toHaveAttribute('aria-selected', 'true')
    const tuesday = SCHEDULE_DAYS[1]!
    expect(
      screen.getByRole('heading', { level: 5, name: tuesday.sessions[0]!.title }),
    ).toBeInTheDocument()
    const monday = SCHEDULE_DAYS[0]!
    expect(
      screen.queryByRole('heading', { level: 5, name: monday.sessions[0]!.title }),
    ).not.toBeInTheDocument()
  })

  it('renders the author line, time/place row and a Download Schedule pill', () => {
    render(<Schedule />)
    expect(screen.getByText('Gary Armstrong')).toBeInTheDocument()
    expect(screen.getByText(/Ceo of Summit/)).toBeInTheDocument()
    expect(screen.getByText('09:00 - 10:30')).toBeInTheDocument()
    expect(screen.getAllByText('Mountain Resort, Phoenix, USA').length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: /Download Schedule \(PDF\)/i })).toHaveAttribute(
      'href',
      '#schedule',
    )
  })
})
