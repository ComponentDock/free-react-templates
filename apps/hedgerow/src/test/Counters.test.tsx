import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Counters } from '../components/Counters'
import { counters } from '../content'
import { installIO, resetIO, resetMedia, stubMedia } from './helpers'

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  resetIO()
  resetMedia()
})

describe('Counters', () => {
  it('ships the final figures when no observer exists', () => {
    render(<Counters />)

    expect(screen.getByText('180')).toBeInTheDocument()
    expect(screen.getByText('14')).toBeInTheDocument()
    expect(screen.getByText('92%')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()

    counters.forEach((counter) => {
      expect(screen.getByText(counter.label)).toHaveClass('text-sm', 'text-gray-600')
    })
  })

  it('counts up once from zero over two seconds when half the box is visible', () => {
    vi.useFakeTimers()
    const io = installIO()
    const { container } = render(<Counters />)
    const first = container.querySelector('[data-counter="180"]')

    expect(first).toHaveTextContent('180')

    act(() => io.fire(0, false))
    expect(first).toHaveTextContent('180')

    act(() => io.fire(0, true))
    expect(first).toHaveTextContent('0')

    act(() => vi.advanceTimersByTime(1000))
    const midway = Number((first?.textContent ?? '0').replace('%', ''))
    expect(midway).toBeGreaterThan(0)
    expect(midway).toBeLessThan(180)

    act(() => vi.advanceTimersByTime(1100))
    expect(first).toHaveTextContent('180')

    act(() => io.fire(0, true))
    act(() => vi.advanceTimersByTime(2000))
    expect(first).toHaveTextContent('180')
  })

  it('keeps the percent suffix on the third counter', () => {
    vi.useFakeTimers()
    const io = installIO()
    const { container } = render(<Counters />)
    const percent = container.querySelector('[data-counter="92"]')

    act(() => io.fire(2, true))
    act(() => vi.advanceTimersByTime(2100))

    expect(percent).toHaveTextContent('92%')
  })

  it('stops its ticker when it unmounts mid-count', () => {
    vi.useFakeTimers()
    const io = installIO()
    const { unmount } = render(<Counters />)

    act(() => io.fire(1, true))
    act(() => vi.advanceTimersByTime(600))
    unmount()

    expect(() => act(() => vi.advanceTimersByTime(3000))).not.toThrow()
  })

  it('cleans up when it unmounts before any intersection', () => {
    const io = installIO()
    const { unmount } = render(<Counters />)

    unmount()
    expect(io.isDisconnected(0)).toBe(true)
    io.restore()
  })

  it('holds the final figures under reduced motion', () => {
    stubMedia(true)
    const io = installIO()
    render(<Counters />)

    expect(io.count()).toBe(0)
    expect(screen.getByText('180')).toBeInTheDocument()
  })
})
