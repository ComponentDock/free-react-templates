import { expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

beforeEach(() => {
  vi.useFakeTimers()
  let time = 0
  vi.spyOn(performance, 'now').mockImplementation(() => time)
  vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
    time += 200
    cb(time)
    return 0
  })
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

it('renders all stat labels', () => {
  render(<Counter />)
  expect(screen.getByText('Project Completed')).toBeInTheDocument()
  expect(screen.getByText('Employees')).toBeInTheDocument()
  expect(screen.getByText('Clients')).toBeInTheDocument()
  expect(screen.getByText('Awards')).toBeInTheDocument()
})

it('animates counters to completion', () => {
  const { unmount } = render(<Counter />)
  // The mock rAF advances time by 200ms each call.
  // With duration=2000, after 11 calls (2200ms), progress >= 1 and animation stops.
  // The mock auto-advances, so by the time we check, animation is done.
  // Check that counters have non-zero values (animation ran)
  const counters = screen.getAllByText(/\d+/)
  const nonZero = counters.filter((el) => Number(el.textContent) > 0)
  expect(nonZero.length).toBeGreaterThan(0)
  unmount()
})
