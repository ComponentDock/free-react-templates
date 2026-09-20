import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders heading and all tabs', () => {
    render(<Schedule />)
    expect(screen.getByText('Conference Schedule')).toBeInTheDocument()
    expect(screen.getByText('Day 01')).toBeInTheDocument()
    expect(screen.getByText('Day 02')).toBeInTheDocument()
    expect(screen.getByText('Day 03')).toBeInTheDocument()
    expect(screen.getByText('Day 04')).toBeInTheDocument()
  })

  it('defaults to day 1 sessions', () => {
    render(<Schedule />)
    expect(screen.getByText('Opening Keynote')).toBeInTheDocument()
    expect(screen.getByText('React Best Practices')).toBeInTheDocument()
    expect(screen.getByText('Cloud Architecture')).toBeInTheDocument()
  })

  it('switches to day 2 on tab click', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByTestId('tab-day2'))
    expect(screen.getByText('TypeScript Deep Dive')).toBeInTheDocument()
    expect(screen.getByText('DevOps Workshop')).toBeInTheDocument()
    expect(screen.getByText('AI in Development')).toBeInTheDocument()
  })

  it('switches to day 3 on tab click', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByTestId('tab-day3'))
    expect(screen.getByText('Web Security')).toBeInTheDocument()
    expect(screen.getByText('Database Design')).toBeInTheDocument()
  })

  it('switches to day 4 on tab click', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByTestId('tab-day4'))
    expect(screen.getByText('Open Source Panel')).toBeInTheDocument()
    expect(screen.getByText('Testing Strategies')).toBeInTheDocument()
    expect(screen.getByText('Closing Ceremony')).toBeInTheDocument()
  })

  it('renders session speakers and times', () => {
    render(<Schedule />)
    expect(screen.getByText('9:00 AM')).toBeInTheDocument()
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument()
  })
})
