import { act, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide with eyebrow, headline and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Crossfit')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Shape Your Perfect Body' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Take A Tour Now' })).toBeInTheDocument()
  })

  it('jumps to a slide when its bar control is activated', () => {
    render(<Hero />)
    act(() => screen.getByRole('button', { name: 'Go to slide 2' }).click())
    expect(
      screen.getByRole('heading', { level: 1, name: 'Increase Your Muscle Power' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances every six seconds and wraps around', () => {
    vi.useFakeTimers()
    try {
      render(<Hero />)
      expect(
        screen.getByRole('heading', { level: 1, name: 'Shape Your Perfect Body' }),
      ).toBeInTheDocument()

      act(() => vi.advanceTimersByTime(6000))
      expect(
        screen.getByRole('heading', { level: 1, name: 'Increase Your Muscle Power' }),
      ).toBeInTheDocument()

      act(() => vi.advanceTimersByTime(6000))
      expect(
        screen.getByRole('heading', { level: 1, name: 'You Only Fail, When You Stop Trying' }),
      ).toBeInTheDocument()

      act(() => vi.advanceTimersByTime(6000))
      expect(
        screen.getByRole('heading', { level: 1, name: 'Shape Your Perfect Body' }),
      ).toBeInTheDocument()
    } finally {
      vi.useRealTimers()
    }
  })
})
