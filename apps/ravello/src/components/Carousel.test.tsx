import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the section heading', () => {
    render(<Carousel />)
    expect(screen.getByRole('heading', { name: /featured destinations/i })).toBeInTheDocument()
  })

  it('renders the carousel with exactly three slides', () => {
    render(<Carousel />)
    // The carousel shows one slide at a time; verify via dot count
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots).toHaveLength(3)
  })

  it('each slide has descriptive alt text', () => {
    render(<Carousel />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img.getAttribute('alt')).toBeTruthy()
    }
  })

  it('has Previous and Next navigation buttons', () => {
    render(<Carousel />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('has three dot indicators', () => {
    render(<Carousel />)
    expect(screen.getByRole('button', { name: /go to slide 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to slide 2/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to slide 3/i })).toBeInTheDocument()
  })

  it('navigates to the next slide on Next click', () => {
    render(<Carousel />)
    const images1 = screen.getAllByRole('img')
    const firstSrc = images1[0]!.getAttribute('src')
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    // Wait for cross-fade to complete
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    const images2 = screen.getAllByRole('img')
    const secondSrc = images2[0]!.getAttribute('src')
    expect(secondSrc).not.toBe(firstSrc)
  })

  it('navigates to the previous slide on Prev click', () => {
    render(<Carousel />)
    // Go to slide 2 first
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    const afterNext = screen.getAllByRole('img')[0]!.getAttribute('src')
    // Go back to slide 1
    fireEvent.click(screen.getByRole('button', { name: /previous slide/i }))
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    const afterPrev = screen.getAllByRole('img')[0]!.getAttribute('src')
    expect(afterPrev).not.toBe(afterNext)
  })

  it('loops from last slide to first on Next', () => {
    render(<Carousel />)
    // Navigate to last slide
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    act(() => vi.advanceTimersByTime(1500))
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    act(() => vi.advanceTimersByTime(1500))
    // Last slide
    const lastSrc = screen.getAllByRole('img')[0]!.getAttribute('src')
    // Click next — should wrap to first
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    act(() => vi.advanceTimersByTime(1500))
    const wrappedSrc = screen.getAllByRole('img')[0]!.getAttribute('src')
    expect(wrappedSrc).not.toBe(lastSrc)
  })

  it('loops from first slide to last on Prev', () => {
    render(<Carousel />)
    const firstSrc = screen.getAllByRole('img')[0]!.getAttribute('src')
    fireEvent.click(screen.getByRole('button', { name: /previous slide/i }))
    act(() => vi.advanceTimersByTime(1500))
    const wrappedSrc = screen.getAllByRole('img')[0]!.getAttribute('src')
    expect(wrappedSrc).not.toBe(firstSrc)
  })

  it('navigates to a specific slide via dot click', () => {
    render(<Carousel />)
    const firstSrc = screen.getAllByRole('img')[0]!.getAttribute('src')
    fireEvent.click(screen.getByRole('button', { name: /go to slide 3/i }))
    act(() => vi.advanceTimersByTime(1500))
    const thirdSrc = screen.getAllByRole('img')[0]!.getAttribute('src')
    expect(thirdSrc).not.toBe(firstSrc)
  })

  it('auto-advances slides after interval', () => {
    render(<Carousel />)
    const firstSrc = screen.getAllByRole('img')[0]!.getAttribute('src')
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    // Autoplay triggers cross-fade, wait for it
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    const secondSrc = screen.getAllByRole('img')[0]!.getAttribute('src')
    expect(secondSrc).not.toBe(firstSrc)
  })

  it('does not pause autoplay on hover', () => {
    render(<Carousel />)
    const firstSrc = screen.getAllByRole('img')[0]!.getAttribute('src')
    fireEvent.mouseEnter(screen.getAllByRole('img')[0]!)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    const secondSrc = screen.getAllByRole('img')[0]!.getAttribute('src')
    expect(secondSrc).not.toBe(firstSrc)
  })

  it('shows the carousel region with aria-label', () => {
    render(<Carousel />)
    expect(screen.getByRole('region', { name: /image carousel/i })).toBeInTheDocument()
  })

  it('arrow buttons have accessible labels', () => {
    render(<Carousel />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toHaveAttribute(
      'aria-label',
      'Previous slide',
    )
    expect(screen.getByRole('button', { name: /next slide/i })).toHaveAttribute(
      'aria-label',
      'Next slide',
    )
  })

  it('dot buttons have accessible labels', () => {
    render(<Carousel />)
    expect(screen.getByRole('button', { name: /go to slide 1/i })).toHaveAttribute(
      'aria-label',
      'Go to slide 1',
    )
  })

  it('active dot has brand color class', () => {
    render(<Carousel />)
    const dot1 = screen.getByRole('button', { name: /go to slide 1/i })
    expect(dot1.className).toContain('bg-brand')
    const dot2 = screen.getByRole('button', { name: /go to slide 2/i })
    expect(dot2.className).toContain('bg-white/50')
  })

  it('clicking the active dot does not trigger a transition', () => {
    render(<Carousel />)
    const dot1 = screen.getByRole('button', { name: /go to slide 1/i })
    // Already on slide 1 — clicking it should be a no-op
    fireEvent.click(dot1)
    act(() => vi.advanceTimersByTime(2000))
    // Still on slide 1
    expect(dot1.className).toContain('bg-brand')
  })

  it('does not autoplay when prefers-reduced-motion is reduce', () => {
    // Mock window.matchMedia to return matches: true
    const originalMatchMedia = window.matchMedia
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })) as unknown as typeof window.matchMedia

    render(<Carousel />)
    const firstSrc = screen.getAllByRole('img')[0]!.getAttribute('src')
    act(() => vi.advanceTimersByTime(15000))
    const stillFirst = screen.getAllByRole('img')[0]!.getAttribute('src')
    expect(stillFirst).toBe(firstSrc)

    window.matchMedia = originalMatchMedia
  })
})
