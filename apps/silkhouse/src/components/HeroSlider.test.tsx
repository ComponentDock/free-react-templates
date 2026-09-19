import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the hero slider section', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('region', { name: /hero slider/i })).toBeInTheDocument()
  })

  it('displays the first slide headline', () => {
    render(<HeroSlider />)
    expect(screen.getByText('FASHION CHANGING ALWAYS')).toBeInTheDocument()
  })

  it('renders Shop Now button', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('link', { name: /shop now/i })).toBeInTheDocument()
  })

  it('renders dot navigation', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('tablist', { name: /slide navigation/i })).toBeInTheDocument()
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)
  })

  it('marks the first slide as selected', () => {
    render(<HeroSlider />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('allows clicking dots to change slides', async () => {
    render(<HeroSlider />)
    const tabs = screen.getAllByRole('tab')
    await act(async () => {
      tabs[1]!.click()
    })
    expect(tabs[1]!).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('NEW COLLECTION 2024')).toBeInTheDocument()
  })

  it('auto-advances slides after timeout', async () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    await act(async () => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('NEW COLLECTION 2024')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
