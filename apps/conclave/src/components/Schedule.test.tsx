import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the heading and Day 1 tab is active by default', () => {
    render(<Schedule />)
    expect(screen.getByText('Schedule Plan')).toBeInTheDocument()
    const tablist = screen.getByRole('tablist', { name: 'Schedule days' })
    const tabs = within(tablist).getAllByRole('tab')
    expect(tabs).toHaveLength(4)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('shows Day 1 sessions by default', () => {
    render(<Schedule />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Opening Keynote: The Future of UX' }),
    ).toBeInTheDocument()
    expect(screen.getByText('09:00 - 10:30')).toBeInTheDocument()
  })

  it('switches to Day 2 when clicking the Day 2 tab', () => {
    render(<Schedule />)
    const tablist = screen.getByRole('tablist', { name: 'Schedule days' })
    const day2Tab = within(tablist).getAllByRole('tab')[1]!
    fireEvent.click(day2Tab)
    expect(day2Tab).toHaveAttribute('aria-selected', 'true')
    expect(
      screen.getByRole('heading', { level: 3, name: 'User Research Methods' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Workshop: Prototyping With React' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Panel: Accessibility in Design' }),
    ).toBeInTheDocument()
  })

  it('switches to Day 3 and Day 4 tabs', () => {
    render(<Schedule />)
    const tablist = screen.getByRole('tablist', { name: 'Schedule days' })
    const tabs = within(tablist).getAllByRole('tab')
    fireEvent.click(tabs[2]!)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Advanced Interaction Design' }),
    ).toBeInTheDocument()
    fireEvent.click(tabs[3]!)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Workshop: Design Thinking' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Networking Lunch & Farewell' }),
    ).toBeInTheDocument()
  })

  it('has proper tabpanel association', () => {
    render(<Schedule />)
    const panel = screen.getByRole('tabpanel', { name: /Day 1/ })
    expect(panel).toBeInTheDocument()
    expect(panel).toHaveAttribute('aria-labelledby', 'schedule-tab-0')
  })
})
