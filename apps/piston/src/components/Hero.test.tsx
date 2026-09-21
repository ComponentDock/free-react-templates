import { render, screen, act } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, expect, it, vi } from 'vitest'

describe('Hero', () => {
  it('renders the first slide headline and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('We Are The Piston Gym')).toBeInTheDocument()
    expect(screen.getByText('Get Started Now')).toBeInTheDocument()
  })

  it('auto-advances to second slide', async () => {
    vi.useFakeTimers()
    render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Challenge Yourself')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
