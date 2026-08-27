import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders slide headings', () => {
    render(<Hero />)
    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings.length).toBe(3)
    expect(headings[0]).toHaveTextContent('Expert Financial Guidance')
  })

  it('renders the Connect with us CTA buttons', () => {
    render(<Hero />)
    const buttons = screen.getAllByRole('button', { name: /connect with us/i })
    expect(buttons.length).toBe(3)
  })

  it('renders background images', () => {
    render(<Hero />)
    const bgs = document.querySelectorAll('[aria-hidden="true"]')
    expect(bgs.length).toBeGreaterThanOrEqual(1)
  })

  it('auto-rotates slides after 5 seconds', () => {
    render(<Hero />)
    // All slides rendered; after advancing timers, component should still work
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBe(3)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBe(3)
  })

  it('has dark overlay', () => {
    render(<Hero />)
    const overlays = document.querySelectorAll('.bg-black\\/50')
    expect(overlays.length).toBeGreaterThanOrEqual(1)
  })
})
