import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroSlides, photoCards } from '../data'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide with chip, meta, headline and excerpt', () => {
    render(<Hero />)
    const first = heroSlides[0]!
    expect(screen.getAllByText(first.category).length).toBeGreaterThan(0)
    expect(screen.getAllByText(first.date).length).toBeGreaterThan(0)
    expect(screen.getByText(first.title)).toBeInTheDocument()
    expect(screen.getByText(first.excerpt)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances to the next slide after the interval', () => {
    render(<Hero />)
    const second = heroSlides[1]!
    expect(screen.queryByText(second.title)).not.toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(second.title)).toBeInTheDocument()
  })

  it('wraps around when advancing past the last slide', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByText(heroSlides[2]!.title)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText(heroSlides[0]!.title)).toBeInTheDocument()
  })

  it('goes to a previous slide and wraps backwards', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText(heroSlides[2]!.title)).toBeInTheDocument()
  })

  it('renders the three photo cards below the slider', () => {
    render(<Hero />)
    for (const card of photoCards) {
      expect(screen.getByText(card.title)).toBeInTheDocument()
    }
  })
})
