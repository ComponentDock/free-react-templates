import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { counterStats } from '../data'

describe('Counter', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders four stats with labels, hairline borders and animated count-up numbers', () => {
    vi.useFakeTimers()
    render(<Counter />)

    for (const stat of counterStats) {
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }

    // Numbers start at 0 and count up to their targets.
    const numbers = screen.getAllByText('0')
    expect(numbers.length).toBe(counterStats.length)

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    for (const stat of counterStats) {
      expect(screen.getByText(String(stat.value))).toBeInTheDocument()
    }

    // The first three items carry the hairline right border.
    const blocks = screen.getByText('Area Population').closest('div')!.parentElement!
    const items = Array.from(blocks.querySelectorAll(':scope > div'))
    expect(items[0]!.className).toContain('border-r')
    expect(items[2]!.className).toContain('border-r')
    expect(items[3]!.className).not.toContain('border-r')
  })
})
