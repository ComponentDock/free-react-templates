import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Calendar } from './Calendar'

describe('Calendar', () => {
  it('renders the section heading', () => {
    render(<Calendar />)
    expect(screen.getByText('Event Calendar')).toBeDefined()
  })

  it('renders the month and year', () => {
    render(<Calendar />)
    expect(screen.getByText('December 2026')).toBeDefined()
  })

  it('renders all three event dates', () => {
    render(<Calendar />)
    expect(screen.getByText('World AIDS Day')).toBeDefined()
    expect(screen.getByText('Victory Day Celebration')).toBeDefined()
    expect(screen.getByText('Christmas Day Arrangement')).toBeDefined()
  })

  it('has prev/next month buttons', () => {
    render(<Calendar />)
    expect(screen.getByRole('button', { name: /previous month/i })).toBeDefined()
    expect(screen.getByRole('button', { name: /next month/i })).toBeDefined()
  })

  it('links to the calendar section', () => {
    render(<Calendar />)
    const section = screen.getByText('Event Calendar').closest('section')
    expect(section?.id).toBe('calendar')
  })
})
