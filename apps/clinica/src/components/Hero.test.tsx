import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders kicker, headline, first rotating word, paragraph and CTA', () => {
    render(<Hero />)
    expect(screen.getByText(hero.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.headline)
    expect(screen.getByText(hero.rotatingWords[0] as string)).toBeInTheDocument()
    expect(screen.getByText(hero.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: new RegExp(hero.cta) })).toHaveAttribute(
      'href',
      hero.href,
    )
  })

  it('cycles through the rotating words on the timer', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByText('health')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(2500)
    })
    expect(screen.getByText('healing')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(2500)
    })
    expect(screen.getByText('wellness')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(2500)
    })
    expect(screen.getByText('health')).toBeInTheDocument()
  })

  it('clears the rotating-word timer on unmount', () => {
    vi.useFakeTimers()
    const spy = vi.spyOn(window, 'clearInterval')
    const { unmount } = render(<Hero />)
    unmount()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })
})
