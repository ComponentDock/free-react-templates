import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Counters } from './Counters'
import { counters } from '../data'

describe('Counters', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the four counter labels', () => {
    render(<Counters />)
    for (const counter of counters) {
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
  })

  it('counts each number up to its target value', () => {
    render(<Counters />)
    act(() => {
      vi.advanceTimersByTime(300)
    })
    for (const el of screen.getAllByText(/^[0-9]+$/)) {
      expect(el.textContent).not.toBe('0')
    }
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    for (const counter of counters) {
      expect(screen.getByText(String(counter.value))).toBeInTheDocument()
    }
  })
})
