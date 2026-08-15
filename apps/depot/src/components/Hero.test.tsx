import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { heroSlides } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

describe('Hero', () => {
  it('renders the first slide with headline, paragraph and teal Get Started CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Buy & Sell Property Here' }),
    ).toBeInTheDocument()
    expect(screen.getByText(heroSlides[0]!.paragraph)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: 'Get Started' })
    expect(cta.className).toContain('bg-brand')
    expect(cta).toHaveAttribute('href', '#properties-section')
  })

  it('navigates slides via dot pagination and marks the active dot teal', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Find Your Perfect Property For Your Home' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('auto-rotates slides every 6 seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Buy & Sell Property Here' }),
    ).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(
      screen.getByRole('heading', { level: 1, name: 'Find Your Perfect Property For Your Home' }),
    ).toBeInTheDocument()
  })
})
