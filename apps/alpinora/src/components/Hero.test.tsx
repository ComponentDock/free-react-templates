import { describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the first slide with eyebrow, giant heading, and white pill CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('New Adventure')
    expect(screen.getAllByText('Discover the Colorful World')).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Discover Now' })).toHaveClass('header-btn')
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(3)
  })

  it('auto-advances through slides and wraps around', () => {
    vi.useFakeTimers()
    try {
      render(<Hero />)
      act(() => {
        vi.advanceTimersByTime(6000)
      })
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('New Trip')
      act(() => {
        vi.advanceTimersByTime(12000)
      })
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('New Adventure')
    } finally {
      vi.useRealTimers()
    }
  })

  it('pauses auto-advance while hovered and resumes on leave', () => {
    vi.useFakeTimers()
    try {
      render(<Hero />)
      const region = screen.getByRole('region', { name: 'Hero' })
      fireEvent.mouseEnter(region)
      act(() => {
        vi.advanceTimersByTime(12000)
      })
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('New Adventure')
      fireEvent.mouseLeave(region)
      act(() => {
        vi.advanceTimersByTime(6000)
      })
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('New Trip')
    } finally {
      vi.useRealTimers()
    }
  })

  it('navigates with the next, previous, and dot controls', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('New Trip')
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('New Adventure')
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('New Experience')
  })
})
