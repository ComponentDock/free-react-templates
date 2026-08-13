import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Deal, getTimeLeft } from './Deal'

const DAY_MS = 24 * 60 * 60 * 1000
const HOUR_MS = 60 * 60 * 1000
const MINUTE_MS = 60 * 1000

afterEach(() => {
  vi.useRealTimers()
})

describe('getTimeLeft', () => {
  it('computes padded two-digit cells from the remaining time', () => {
    const target = 2 * DAY_MS + 3 * HOUR_MS + 4 * MINUTE_MS + 5 * 1000 + 999

    expect(getTimeLeft(target, 0)).toEqual({
      days: '02',
      hours: '03',
      minutes: '04',
      seconds: '05',
    })
  })

  it('clamps at zero when the target is in the past', () => {
    expect(getTimeLeft(0, 1_000)).toEqual({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    })
  })

  it('clamps at zero when the target equals now', () => {
    expect(getTimeLeft(5_000, 5_000)).toEqual({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    })
  })

  it('rolls hours and minutes correctly across day boundaries', () => {
    const target = DAY_MS + HOUR_MS + MINUTE_MS + 30 * 1000

    expect(getTimeLeft(target, 0)).toEqual({
      days: '01',
      hours: '01',
      minutes: '01',
      seconds: '30',
    })
  })
})

describe('Deal', () => {
  it('renders the deal band with product, prices and thumbnails', () => {
    render(<Deal />)

    expect(screen.getByRole('heading', { name: 'Deal of the month' })).toBeInTheDocument()
    expect(screen.getAllByText('Deal of the month')).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Nike Free RN 2019 iD' })).toBeInTheDocument()
    expect(screen.getByText('$120.00')).toHaveClass('line-through')
    expect(screen.getByText('$80.00')).toBeInTheDocument()
    expect(screen.getByTestId('deal')).toHaveClass('bg-brand')
  })

  it('renders four labelled timer cells', () => {
    render(<Deal />)

    for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('ticks down every second toward the target', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-14T00:00:00Z'))
    render(<Deal />)

    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getAllByText('00')).toHaveLength(3)

    act(() => {
      vi.advanceTimersByTime(1_000)
    })
    expect(screen.getAllByText('59')).toHaveLength(2)

    act(() => {
      vi.advanceTimersByTime(59_000)
    })
    expect(screen.getAllByText('00')).toHaveLength(1)
    expect(screen.getAllByText('59')).toHaveLength(1)
  })
})
