import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the hero section with first slide heading', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Strategic Design for Brands',
    )
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('renders slide indicators', () => {
    render(<Hero />)

    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false')
  })

  it('advances to the next slide after 5 seconds', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Strategic Design for Brands',
    )

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Creators of Brands Template',
    )

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Design & develop functional sites',
    )

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Strategic Design for Brands',
    )
  })

  it('allows manual slide navigation via tab buttons', () => {
    render(<Hero />)

    const tabs = screen.getAllByRole('tab')
    act(() => {
      tabs[1]!.click()
    })

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Creators of Brands Template',
    )
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
  })

  it('applies custom className', () => {
    const { container } = render(<Hero className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
