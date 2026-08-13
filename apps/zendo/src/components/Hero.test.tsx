import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

describe('Hero', () => {
  it('renders the first slide headline, subheading and CTA', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(hero.slides[0]!.heading)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(hero.slides[0]!.subheading)
    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveAttribute('href', '#classes-section')
  })

  it('marks the first slide dot as current and renders both slide images', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).not.toHaveAttribute(
      'aria-current',
    )
    const images = document.querySelectorAll('[data-testid="hero"] img')
    expect(images).toHaveLength(2)
  })

  it('advances and wraps with the dots', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.slides[1]!.heading)
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Go to slide 1' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.slides[0]!.heading)
  })

  it('autoplays to the next slide', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.slides[0]!.heading)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.slides[1]!.heading)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.slides[0]!.heading)
  })
})
