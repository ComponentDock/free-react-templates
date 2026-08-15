import { act, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Countdown } from './Countdown'
import { getEventStart } from '../data'

describe('Countdown', () => {
  it('renders location, dates, and a live countdown timer', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 7, 1))
    try {
      const { container } = render(<Countdown />)
      expect(screen.getByText('City Hall, New York City')).toBeInTheDocument()
      expect(screen.getByText('12-15 Sep 2019')).toBeInTheDocument()
      const target = getEventStart(new Date(2026, 7, 1))
      const diff = Math.floor((target.getTime() - new Date(2026, 7, 1).getTime()) / 1000)
      const days = Math.floor(diff / 86400)
      const hours = Math.floor((diff % 86400) / 3600)
      const mins = Math.floor((diff % 3600) / 60)
      const secs = diff % 60
      expect(container.querySelector('[data-value="Days"]')).toHaveTextContent(
        String(days).padStart(2, '0'),
      )
      expect(container.querySelector('[data-value="Hours"]')).toHaveTextContent(
        String(hours).padStart(2, '0'),
      )
      expect(container.querySelector('[data-value="Minutes"]')).toHaveTextContent(
        String(mins).padStart(2, '0'),
      )
      expect(container.querySelector('[data-value="Seconds"]')).toHaveTextContent(
        String(secs).padStart(2, '0'),
      )
      for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
        expect(screen.getAllByText(label).length).toBeGreaterThan(0)
      }
    } finally {
      vi.useRealTimers()
    }
  })

  it('ticks down over time', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 7, 1))
    try {
      const { container } = render(<Countdown />)
      const seconds = container.querySelector('[data-value="Seconds"]')
      expect(seconds).not.toBeNull()
      const before = seconds!.textContent
      act(() => {
        vi.advanceTimersByTime(1000)
      })
      expect(seconds!.textContent).not.toBe(before)
    } finally {
      vi.useRealTimers()
    }
  })
})
