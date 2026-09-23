import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the initial slide heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Experienced Legal Counsel/)
    expect(screen.getByRole('link', { name: /make an appointment/i })).toBeInTheDocument()
  })

  it('auto-advances slides after 6 seconds', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Experienced/)

    act(() => {
      vi.advanceTimersByTime(6100)
    })

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Reclaim/)
  })

  it('allows clicking slide indicators to change slides', () => {
    render(<Hero />)

    const indicators = screen.getAllByRole('button', { name: /go to slide/i })
    expect(indicators).toHaveLength(3)

    act(() => {
      indicators[2]!.click()
    })

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Fight Against Injustice/)
  })
})
