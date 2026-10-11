import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'

const NOW = new Date('2026-06-01T00:00:00.000Z')

describe('Countdown', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders four labelled circles over a seeded cover image', () => {
    const { container } = render(<Countdown />)

    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()

    const cover = container.querySelector('img')
    expect(cover).toHaveAttribute('src', 'https://picsum.photos/seed/debut-cover/1600/1200')
    expect(cover).toHaveAttribute('alt', '')
  })

  it('starts 35 days and 18 hours out, padded to two digits', () => {
    vi.useFakeTimers()
    vi.setSystemTime(NOW)

    render(<Countdown />)

    expect(screen.getByText('35')).toBeInTheDocument()
    expect(screen.getByText('18')).toBeInTheDocument()
    expect(screen.getAllByText('00')).toHaveLength(2)
  })

  it('ticks once per second', () => {
    vi.useFakeTimers()
    vi.setSystemTime(NOW)

    render(<Countdown />)

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText('17')).toBeInTheDocument()
    expect(screen.getAllByText('59')).toHaveLength(2)
  })

  it('leans the grid toward the pointer and springs back on leave', () => {
    render(<Countdown />)

    const grid = screen.getByText('Days').parentElement!.parentElement!
    grid.getBoundingClientRect = () => ({ left: 0, top: 0, width: 200, height: 100 }) as DOMRect

    act(() => {
      grid.dispatchEvent(
        new PointerEvent('pointermove', { clientX: 200, clientY: 100, bubbles: true }),
      )
    })

    expect(grid.style.transform).toBe(
      'perspective(1000px) rotateX(-10.00deg) rotateY(10.00deg) scale3d(1.1,1.1,1.1)',
    )

    act(() => {
      grid.dispatchEvent(new PointerEvent('pointerleave', { bubbles: true }))
    })

    expect(grid.style.transform).toBe('')
  })

  it('accepts a className override', () => {
    const { container } = render(<Countdown className="opacity-50" />)
    expect(container.firstElementChild).toHaveClass('opacity-50')
  })
})
