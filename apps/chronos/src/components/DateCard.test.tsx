import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { DateCard } from './DateCard'

afterEach(() => {
  vi.useRealTimers()
})

describe('DateCard', () => {
  it('renders the weekday band with the full weekday name, uppercased', () => {
    render(<DateCard date={new Date('2026-08-15T12:00:00')} />)
    const weekday = screen.getByText('Saturday')
    expect(weekday).toBeInTheDocument()
    expect(weekday.className).toContain('uppercase')
    expect(weekday.className).toContain('tracking-[0.35em]')
    expect(weekday.className).toContain('bg-brand')
  })

  it('renders the month piece with the full month name', () => {
    render(<DateCard date={new Date('2026-08-15T12:00:00')} />)
    expect(screen.getByText('August')).toBeInTheDocument()
  })

  it('renders the date piece with the ordinal suffix', () => {
    render(<DateCard date={new Date('2026-08-15T12:00:00')} />)
    expect(screen.getByText('15th')).toBeInTheDocument()
  })

  it('renders the year band with the four-digit year', () => {
    render(<DateCard date={new Date('2026-08-15T12:00:00')} />)
    const year = screen.getByText('2026')
    expect(year).toBeInTheDocument()
    expect(year.className).toContain('uppercase')
    expect(year.className).toContain('tracking-[0.35em]')
    expect(year.className).toContain('bg-brand')
  })

  it('derives all four pieces from the current date when no date prop is given', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-15T12:00:00'))
    render(<DateCard />)
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('August')).toBeInTheDocument()
    expect(screen.getByText('15th')).toBeInTheDocument()
    expect(screen.getByText('2026')).toBeInTheDocument()
  })

  it('renders the card shell with the soft drop shadow and flush rounded stack', () => {
    const { container } = render(<DateCard date={new Date('2026-08-15T12:00:00')} />)
    const card = container.firstElementChild
    expect(card).not.toBeNull()
    expect(card!.className).toContain('shadow-[0_15px_30px_-16px_rgba(0,0,0,0.3)]')
    expect(card!.className).toContain('overflow-hidden')
    expect(card!.className).toContain('rounded')
  })
})
