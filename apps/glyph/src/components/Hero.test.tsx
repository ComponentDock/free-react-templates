import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { heroSlides } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide with pill, meta, title, excerpt and Read More', () => {
    render(<Hero />)

    expect(screen.getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    expect(screen.getByText('Gadgets')).toBeInTheDocument()
    expect(screen.getByText('March 14, 2018')).toBeInTheDocument()
    expect(screen.getByText('05')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()
    expect(screen.getByText(heroSlides[0]!.excerpt)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Read More/ })).toBeInTheDocument()
  })

  it('auto-advances to the next slide after the interval', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(4000)
    })

    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[1]!.title }),
    ).toBeInTheDocument()
  })

  it('wraps around after the last slide when auto-advancing', () => {
    render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(4000 * 3)
    })

    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()
  })

  it('navigates with the next and previous controls', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[1]!.title }),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()
  })

  it('wraps from the first slide back to the last via the previous control', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[heroSlides.length - 1]!.title }),
    ).toBeInTheDocument()
  })

  it('clears the auto-advance timer on unmount', () => {
    const { unmount } = render(<Hero />)
    unmount()

    act(() => {
      vi.advanceTimersByTime(4000 * 2)
    })
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()
  })
})
