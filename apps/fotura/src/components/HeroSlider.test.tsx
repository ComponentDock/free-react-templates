import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the hero section with aria label', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('region', { name: 'Hero slider' })).toBeInTheDocument()
  })

  it('displays the first slide headline', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Creative Photography')
  })

  it('displays the first slide subtitle', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Capturing moments that last forever')).toBeInTheDocument()
  })

  it('renders the VISIT CTA button', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('link', { name: 'VISIT' })).toHaveAttribute('href', '#portfolio')
  })

  it('renders slide indicator buttons', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 4' })).toBeInTheDocument()
  })

  it('marks the first indicator as active', () => {
    render(<HeroSlider />)
    const indicator = screen.getByRole('button', { name: 'Go to slide 1' })
    expect(indicator).toHaveClass('bg-white')
  })

  it('displays a background image', () => {
    render(<HeroSlider />)
    const bgImage = screen.getByRole('img', { name: 'Creative Photography' })
    expect(bgImage).toHaveStyle({
      backgroundImage: 'url(https://picsum.photos/seed/fotura-1/1920/1080)',
    })
  })

  it('advances to next slide after interval', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Creative Photography')
    act(() => {
      vi.advanceTimersByTime(5600)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Visual Stories')
  })

  it('does not advance before the interval elapses', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Creative Photography')
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Creative Photography')
  })

  it('clicking the same indicator does nothing', () => {
    render(<HeroSlider />)
    const indicator1 = screen.getByRole('button', { name: 'Go to slide 1' })
    act(() => {
      fireEvent.click(indicator1)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Creative Photography')
  })

  it('clicking a different indicator navigates to that slide', () => {
    render(<HeroSlider />)
    const indicator3 = screen.getByRole('button', { name: 'Go to slide 3' })
    act(() => {
      fireEvent.click(indicator3)
    })
    act(() => {
      vi.advanceTimersByTime(700)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Artistic Vision')
  })

  it('loops back to first slide after last', () => {
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(5600 * 4 + 1000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Creative Photography')
  })
})
