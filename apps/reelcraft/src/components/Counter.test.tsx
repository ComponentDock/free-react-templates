import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Counter } from './Counter'
import { triggerAllObservers, resetObservers } from '../test/setup'

describe('Counter', () => {
  beforeEach(() => {
    resetObservers()
    vi.useFakeTimers()
    let now = 0
    vi.spyOn(performance, 'now').mockImplementation(() => now)
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
      now += 50
      cb(now)
      return 1
    })
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('renders all four stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Completed Projects')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Perspective Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })

  it('triggers animation when visible', () => {
    render(<Counter />)

    act(() => {
      triggerAllObservers(true)
    })

    expect(screen.getAllByText('230').length).toBe(3)
    expect(screen.getByText('1068')).toBeInTheDocument()
  })

  it('does not restart animation when already started', () => {
    render(<Counter />)

    act(() => {
      triggerAllObservers(true)
    })

    act(() => {
      triggerAllObservers(true)
    })

    expect(screen.getAllByText('230').length).toBe(3)
  })

  it('does not animate when not intersecting', () => {
    render(<Counter />)

    act(() => {
      triggerAllObservers(false)
    })

    // Counters should still be at 0
    expect(screen.getAllByText('0').length).toBe(4)
  })
})
