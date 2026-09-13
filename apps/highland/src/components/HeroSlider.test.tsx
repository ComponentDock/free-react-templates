import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the hero slider with first slide', () => {
    render(<HeroSlider />)
    expect(screen.getByTestId('hero-slider')).toBeInTheDocument()
    expect(screen.getByText('Highland Resort')).toBeInTheDocument()
  })

  it('renders prev/next buttons', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('advances to next slide on next click', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByText('Life is Beautiful')).toBeInTheDocument()
  })

  it('goes to previous slide on prev click', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByText('Relax & Rejuvenate')).toBeInTheDocument()
  })

  it('auto-advances slides via interval', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Highland Resort')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Life is Beautiful')).toBeInTheDocument()
  })
})
