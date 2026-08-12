import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO_SLIDES } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

describe('Hero', () => {
  it('renders the first headline, slide images, dots, and scroll indicator', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: HERO_SLIDES[0]!.headline }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(4)
    expect(screen.getByRole('link', { name: 'Scroll down' })).toHaveAttribute('href', '#intro')
  })

  it('switches slides via the dots', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(
      screen.getByRole('heading', { level: 1, name: HERO_SLIDES[2]!.headline }),
    ).toBeInTheDocument()
  })

  it('auto-advances slides on an interval', () => {
    vi.useFakeTimers()
    render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(
      screen.getByRole('heading', { level: 1, name: HERO_SLIDES[1]!.headline }),
    ).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(15000)
    })
    expect(
      screen.getByRole('heading', { level: 1, name: HERO_SLIDES[0]!.headline }),
    ).toBeInTheDocument()
  })
})
