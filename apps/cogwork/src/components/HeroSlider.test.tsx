import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide heading initially', () => {
    render(<HeroSlider />)
    expect(screen.getByText('We Are Industrial Company')).toBeInTheDocument()
  })

  it('renders the second slide heading', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Create, Enhance and Sustain')).toBeInTheDocument()
  })

  it('renders play buttons for both slides', () => {
    render(<HeroSlider />)
    const buttons = screen.getAllByLabelText('Play video')
    expect(buttons.length).toBe(2)
  })

  it('renders slide images', () => {
    render(<HeroSlider />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })

  it('transitions to the next slide after 5 seconds', () => {
    const { container } = render(<HeroSlider />)
    const section = container.querySelector('section')
    const slideDivs = Array.from(section?.querySelectorAll(':scope > div') ?? [])

    expect(slideDivs).toHaveLength(2)
    const first = slideDivs[0] as Element
    const second = slideDivs[1] as Element

    // First slide visible, second hidden
    expect(first.className).toContain('opacity-100')
    expect(second.className).toContain('opacity-0')

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    // After transition
    expect(first.className).toContain('opacity-0')
    expect(second.className).toContain('opacity-100')
  })
})
