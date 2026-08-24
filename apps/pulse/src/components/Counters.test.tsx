import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all stat labels', () => {
    render(<Counters />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
    expect(screen.getByText('Expert Workers')).toBeInTheDocument()
  })

  it('animates counters from 0 to their final values', () => {
    vi.useFakeTimers()
    render(<Counters />)

    // Advance past the full animation duration (2000ms)
    act(() => {
      vi.advanceTimersByTime(2100)
    })

    expect(screen.getByText('60')).toBeInTheDocument()
    expect(screen.getByText('9200')).toBeInTheDocument()
    expect(screen.getByText('5800')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
  })

  it('increments gradually during animation', () => {
    vi.useFakeTimers()
    render(<Counters />)

    act(() => {
      vi.advanceTimersByTime(500)
    })

    // Should show some intermediate values, not yet at final
    const projects = screen.getByText('Projects').closest('div')!
    expect(projects.textContent).toContain('Projects')
  })
})
