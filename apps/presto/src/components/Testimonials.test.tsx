import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('renders the title block on the dark band', () => {
    render(<Testimonials />)
    const section = screen.getByRole('region', { name: 'Customer stories' })
    expect(section).toHaveClass('pt-[190px]', 'pb-[90px]', 'from-violet-deep')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Stories from our customers' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Teams of every size run on Presto/)).toBeInTheDocument()
  })

  it('opens on the first of two slides with a seeded portrait and founder line', () => {
    render(<Testimonials />)
    expect(screen.getByText(/We moved eleven client sites/)).toBeInTheDocument()
    expect(screen.getByText('Devon Marsh')).toBeInTheDocument()
    expect(screen.getByText('Creative director, Studio Kite')).toBeInTheDocument()
    expect(screen.getByRole('presentation')).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/presto-testimonial-1/120/120'),
    )
  })

  it('renders exactly two labelled dot indicators, the active one current', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button')
    expect(dots).toHaveLength(2)
    expect(dots[0]).toHaveAttribute('aria-label', 'Show testimonial 1: Devon Marsh')
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[1]).not.toHaveAttribute('aria-current')
    expect(dots[1]).toHaveClass('bg-white/40')
  })

  it('switches slides when a dot is chosen', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getAllByRole('button')[1]!)
    expect(screen.getByText('Aria Lindqvist')).toBeInTheDocument()
    expect(screen.getByText('Founder, Northfern')).toBeInTheDocument()
    expect(screen.getAllByRole('button')[1]).toHaveAttribute('aria-current', 'true')
    expect(screen.getAllByRole('button')[0]).toHaveClass('bg-white/40')
  })

  it('moves between slides with the arrow keys and ignores other keys', () => {
    render(<Testimonials />)
    const slider = screen.getByRole('group', { name: 'Testimonials slider' })

    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    expect(screen.getByText('Aria Lindqvist')).toBeInTheDocument()

    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    expect(screen.getByText('Devon Marsh')).toBeInTheDocument()

    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    expect(screen.getByText('Aria Lindqvist')).toBeInTheDocument()

    fireEvent.keyDown(slider, { key: 'Enter' })
    expect(screen.getByText('Aria Lindqvist')).toBeInTheDocument()
  })

  it('advances on autoplay and pauses while hovered or focused', () => {
    render(<Testimonials />)
    const slider = screen.getByRole('group', { name: 'Testimonials slider' })

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Aria Lindqvist')).toBeInTheDocument()

    fireEvent.mouseEnter(slider)
    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(screen.getByText('Aria Lindqvist')).toBeInTheDocument()

    fireEvent.mouseLeave(slider)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Devon Marsh')).toBeInTheDocument()

    fireEvent.focus(slider)
    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(screen.getByText('Devon Marsh')).toBeInTheDocument()

    fireEvent.blur(slider)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Aria Lindqvist')).toBeInTheDocument()
  })

  it('keeps the slider still when the visitor prefers reduced motion', () => {
    const original = window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: vi.fn().mockReturnValue({ matches: true }),
    })
    render(<Testimonials />)
    act(() => {
      vi.advanceTimersByTime(20000)
    })
    expect(screen.getByText('Devon Marsh')).toBeInTheDocument()
    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-reduced-motion: reduce)')
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: original,
    })
  })

  it('clears the autoplay timer when it unmounts', () => {
    const clearSpy = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = render(<Testimonials />)
    unmount()
    expect(clearSpy).toHaveBeenCalled()
  })
})
