import { render, screen, act } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide headline', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Let us take you away')).toBeInTheDocument()
  })

  it('renders all three slides', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Discover the world')).toBeInTheDocument()
    expect(screen.getByText('Adventure awaits')).toBeInTheDocument()
  })

  it('renders navigation dots', () => {
    render(<HeroSlider />)
    expect(screen.getByLabelText('Go to Offers')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to Testimonials')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to Latest')).toBeInTheDocument()
  })

  it('renders images with group roles', () => {
    render(<HeroSlider />)
    const groups = screen.getAllByRole('group')
    expect(groups.length).toBeGreaterThanOrEqual(3)
  })

  it('clicking a nav dot changes slide', () => {
    render(<HeroSlider />)

    // Click on "Go to Testimonials" (second slide) using act
    act(() => {
      screen.getByLabelText('Go to Testimonials').click()
    })

    const slide2 = screen.getByText('Discover the world').closest('[role="group"]')!
    expect(slide2.className).toContain('opacity-100')
  })

  it('auto-advances slides', () => {
    render(<HeroSlider />)
    // First slide is visible (opacity-100)
    const slide1 = screen.getByText('Let us take you away').closest('[role="group"]')!
    expect(slide1.className).toContain('opacity-100')

    // Advance time
    act(() => {
      vi.advanceTimersByTime(5000)
    })

    // Second slide should now be visible
    const slide2 = screen.getByText('Discover the world').closest('[role="group"]')!
    expect(slide2.className).toContain('opacity-100')
  })
})
