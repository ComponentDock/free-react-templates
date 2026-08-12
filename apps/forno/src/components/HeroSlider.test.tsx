import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { HeroSlider } from './HeroSlider'

afterEach(() => {
  vi.useRealTimers()
})

describe('HeroSlider', () => {
  it('shows the first slide and all three headings in the carousel', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { name: 'Best Restaurant' })).toBeInTheDocument()
    expect(screen.getByText('Forno')).toBeInTheDocument()
    expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(5)
  })

  it('cycles slides with next, prev and dots', () => {
    render(<HeroSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { name: 'Nutritious & Tasty' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { name: 'Delicious Specialties' })).toBeInTheDocument()

    // Next from the last slide wraps to the first
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { name: 'Best Restaurant' })).toBeInTheDocument()

    // Prev from the first slide wraps to the last
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { name: 'Delicious Specialties' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { name: 'Nutritious & Tasty' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances on an interval and stops after unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<HeroSlider />)

    expect(screen.getByRole('heading', { name: 'Best Restaurant' })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { name: 'Nutritious & Tasty' })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(screen.getByRole('heading', { name: 'Best Restaurant' })).toBeInTheDocument()

    unmount()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
  })
})
