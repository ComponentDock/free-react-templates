import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide with accent headline, paragraph and CTAs', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Music for everyone\./)
    expect(heading.querySelector('.text-brand')?.textContent).toBe('Music')

    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download Now' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start free trial' })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).not.toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('switches to the second slide via dots', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Listen to new music\./)
    expect(heading.querySelector('.text-brand')?.textContent).toBe('Listen to')

    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('advances to the next slide automatically', () => {
    vi.useFakeTimers()
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Music for everyone\./)

    act(() => {
      vi.advanceTimersByTime(6000)
    })

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Listen to new music\./)

    act(() => {
      vi.advanceTimersByTime(6000)
    })

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Music for everyone\./)
  })

  it('clears the autoplay interval on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)

    expect(vi.getTimerCount()).toBe(1)
    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
