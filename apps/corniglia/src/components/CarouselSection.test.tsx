import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { CarouselSection } from './CarouselSection'

describe('CarouselSection', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading', () => {
    render(<CarouselSection />)
    expect(screen.getByText('Carousel #19')).toBeInTheDocument()
  })

  it('renders the first slide by default', () => {
    render(<CarouselSection />)
    expect(screen.getByText(/Even the all-powerful Pointing/)).toBeInTheDocument()
    expect(screen.getByText(/Ryan Peters/)).toBeInTheDocument()
  })

  it('renders four slides total (verified via dot count)', () => {
    render(<CarouselSection />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(4)
  })

  it('navigates to next slide on arrow click', () => {
    render(<CarouselSection />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText(/The Big Oxmox advised her/)).toBeInTheDocument()
    expect(screen.getByText(/Sarah Mitchell/)).toBeInTheDocument()
  })

  it('navigates to previous slide on arrow click', () => {
    render(<CarouselSection />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText(/The Big Oxmox advised her/)).toBeInTheDocument()
  })

  it('navigates to specific slide on dot click', () => {
    render(<CarouselSection />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/James Crawford/)).toBeInTheDocument()
  })

  it('marks the active dot correctly', () => {
    render(<CarouselSection />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[1]).not.toHaveAttribute('aria-current')

    fireEvent.click(dots[1]!)
    expect(dots[0]).not.toHaveAttribute('aria-current')
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
  })

  it('wraps from last to first slide (loop)', () => {
    render(<CarouselSection />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 4' }))
    expect(screen.getByText(/A wonderful serenity/)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText(/Even the all-powerful Pointing/)).toBeInTheDocument()
  })

  it('wraps from first to last slide on previous', () => {
    render(<CarouselSection />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText(/A wonderful serenity/)).toBeInTheDocument()
  })

  it('advances slides on autoplay', () => {
    render(<CarouselSection />)
    expect(screen.getByText(/Even the all-powerful Pointing/)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(screen.getByText(/The Big Oxmox advised her/)).toBeInTheDocument()
  })

  it('pauses autoplay on hover', () => {
    const { container } = render(<CarouselSection />)
    const section = container.querySelector('section')!
    fireEvent.mouseEnter(section)

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByText(/Even the all-powerful Pointing/)).toBeInTheDocument()
  })

  it('resumes autoplay after mouse leave', () => {
    const { container } = render(<CarouselSection />)
    const section = container.querySelector('section')!

    fireEvent.mouseEnter(section)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(/Even the all-powerful Pointing/)).toBeInTheDocument()

    fireEvent.mouseLeave(section)
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText(/The Big Oxmox advised her/)).toBeInTheDocument()
  })

  it('has accessible arrow buttons', () => {
    render(<CarouselSection />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('has accessible dot buttons with aria-labels', () => {
    render(<CarouselSection />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 4' })).toBeInTheDocument()
  })

  it('shows arrows on desktop and hides on mobile', () => {
    render(<CarouselSection />)
    const prevArrow = screen.getByRole('button', { name: 'Previous slide' })
    const nextArrow = screen.getByRole('button', { name: 'Next slide' })
    expect(prevArrow.className).toContain('max-md:hidden')
    expect(nextArrow.className).toContain('max-md:hidden')
  })
})
