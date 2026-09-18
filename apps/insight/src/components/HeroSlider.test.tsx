import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeAll(() => {
    vi.useFakeTimers()
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  it('renders heading and CTA', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/We help you to grow your business/)).toBeInTheDocument()
    expect(screen.getByText('Contact Now')).toBeInTheDocument()
  })

  it('renders background images', () => {
    const { container } = render(<HeroSlider />)
    const imgs = container.querySelectorAll('img')
    expect(imgs.length).toBe(2)
  })

  it('auto-rotates slides', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/We help you to grow your business/)).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5100)
    })
    expect(screen.getByText(/Your trusted consulting partner/)).toBeInTheDocument()
  })
})
