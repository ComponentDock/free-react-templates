import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { EVENT, HERO_SLIDES } from '../content'
import { Hero } from './Hero'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('Hero', () => {
  it('renders one h1, the kicker with ordinals and the venue line', () => {
    render(<Hero />)
    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]?.className).toContain('lg:text-[100px]')
    for (const line of EVENT.headline) {
      expect(headings[0]?.textContent).toContain(line)
    }
    expect(document.getElementById('top')?.textContent).toContain(EVENT.venue)
    expect(document.querySelectorAll('sup')).toHaveLength(HERO_SLIDES.length * 2)
  })

  it('renders four slides, one active at a time, with a dot rail', () => {
    render(<Hero />)
    const dots = screen.getAllByRole('button')
    expect(dots).toHaveLength(4)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[0]?.style.backgroundColor).toBe('var(--color-hero-start)')

    fireEvent.click(dots[2]!)
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
    expect(dots[0]).not.toHaveAttribute('aria-current')
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('advances on a 1.2s interval while it is playing', () => {
    vi.useFakeTimers()
    render(<Hero />)
    const dots = screen.getAllByRole('button')
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    act(() => {
      vi.advanceTimersByTime(1200)
    })
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
    act(() => {
      vi.advanceTimersByTime(1200 * 3)
    })
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
  })

  it('pauses on hover and resumes on leave', () => {
    vi.useFakeTimers()
    render(<Hero />)
    const band = document.getElementById('top') as HTMLElement
    const dots = screen.getAllByRole('button')

    fireEvent.mouseEnter(band)
    act(() => {
      vi.advanceTimersByTime(2400)
    })
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    fireEvent.mouseLeave(band)
    act(() => {
      vi.advanceTimersByTime(1200)
    })
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
  })

  it('never starts the interval under a reduced-motion preference', () => {
    vi.useFakeTimers()
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }))
    render(<Hero />)
    const dots = screen.getAllByRole('button')
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
  })

  it('hides inactive slide copy from the accessibility tree', () => {
    render(<Hero />)
    const slides = document.querySelectorAll('#top > div[aria-hidden]')
    expect(slides).toHaveLength(4)
    expect(slides[0]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
  })
})
