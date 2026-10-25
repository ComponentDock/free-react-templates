import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { HERO, HERO_STATS } from '../content'
import { Hero } from './Hero'

const originalMatchMedia = window.matchMedia

afterEach(() => {
  vi.useRealTimers()
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: originalMatchMedia })
})

describe('Hero', () => {
  it('renders the fee pill, the two-line headline and the lede', () => {
    render(<Hero onOpenQuote={vi.fn()} />)
    expect(screen.getByText(HERO.pill)).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain(HERO.heading)
    expect(heading.textContent).toContain(HERO.phrases[0])
    expect(screen.getByText(HERO.lede)).toBeInTheDocument()
  })

  it('cycles the gradient line every three seconds', () => {
    vi.useFakeTimers()
    render(<Hero onOpenQuote={vi.fn()} />)
    expect(screen.getByText(HERO.phrases[0]!)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText(HERO.phrases[1]!)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText(HERO.phrases[2]!)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText(HERO.phrases[0]!)).toBeInTheDocument()
  })

  it('settles on one phrase under prefers-reduced-motion', () => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: true }),
    })
    vi.useFakeTimers()
    render(<Hero onOpenQuote={vi.fn()} />)
    act(() => {
      vi.advanceTimersByTime(9000)
    })
    expect(screen.getByText(HERO.phrases[0]!)).toBeInTheDocument()
  })

  it('carries the four hero figures and the 2:1 photograph', () => {
    render(<Hero onOpenQuote={vi.fn()} />)
    HERO_STATS.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    })
    const photo = screen.getByRole('img', { name: HERO.photoAlt })
    expect(photo).toHaveAttribute('width', '1200')
    expect(photo.className).toContain('aspect-[2/1]')
  })

  it('opens the quote dialog and links the rates band', () => {
    const onOpenQuote = vi.fn()
    render(<Hero onOpenQuote={onOpenQuote} />)
    fireEvent.click(screen.getByRole('button', { name: /Get a fixed quote/ }))
    expect(onOpenQuote).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('link', { name: HERO.secondaryCta })).toHaveAttribute('href', '#rates')
  })
})
