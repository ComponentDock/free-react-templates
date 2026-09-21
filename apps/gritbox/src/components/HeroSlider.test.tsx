import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide heading', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Welcome To GritBox')).toBeInTheDocument()
    expect(screen.getByText('Find The Healthy Way')).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Our Program')).toBeInTheDocument()
    expect(screen.getByText('Join Our Club')).toBeInTheDocument()
  })

  it('renders slide indicator buttons', () => {
    render(<HeroSlider />)
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument()
  })

  it('advances to next slide after 5 seconds', () => {
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Optimize Your Health')).toBeInTheDocument()
    expect(screen.getByText('Effective Program')).toBeInTheDocument()
  })

  it('goes to specific slide when indicator is clicked', () => {
    render(<HeroSlider />)
    act(() => {
      screen.getByLabelText('Go to slide 2').click()
    })
    expect(screen.getByText('Optimize Your Health')).toBeInTheDocument()
    expect(screen.getByText('Effective Program')).toBeInTheDocument()
  })

  it('wraps around after last slide', () => {
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(screen.getByText('Welcome To GritBox')).toBeInTheDocument()
  })
})
