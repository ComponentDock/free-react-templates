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

  it('renders the featured collection heading', () => {
    render(<Carousel />)
    expect(screen.getByRole('heading', { name: /featured collection/i })).toBeInTheDocument()
  })

  it('displays the first slide content by default', () => {
    render(<Carousel />)
    expect(screen.getByRole('heading', { name: /define your budget/i })).toBeInTheDocument()
    expect(screen.getByText((content) => content.includes('0123 456 78901'))).toBeInTheDocument()
    expect(screen.getByText((content) => content.includes('email@info.com'))).toBeInTheDocument()
  })

  it('has navigation arrow buttons', () => {
    render(<Carousel />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('has pagination dots', () => {
    render(<Carousel />)
    expect(screen.getByRole('button', { name: /go to slide 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to slide 2/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to slide 3/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to slide 4/i })).toBeInTheDocument()
  })

  it('navigates to the next slide on arrow click', () => {
    render(<Carousel />)
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { name: /kids collection/i })).toBeInTheDocument()
  })

  it('navigates to the previous slide on arrow click', () => {
    render(<Carousel />)
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { name: /kids collection/i })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByRole('heading', { name: /define your budget/i })).toBeInTheDocument()
  })

  it('navigates to a specific slide via dot click', () => {
    render(<Carousel />)
    fireEvent.click(screen.getByRole('button', { name: /go to slide 3/i }))
    expect(screen.getByRole('heading', { name: /ladies collection/i })).toBeInTheDocument()
  })

  it('auto-advances slides after interval', () => {
    render(<Carousel />)
    expect(screen.getByRole('heading', { name: /define your budget/i })).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { name: /kids collection/i })).toBeInTheDocument()
  })

  it('pauses auto-advance on mouse enter and resumes on mouse leave', () => {
    render(<Carousel />)
    const dotsContainer = screen.getByRole('button', { name: /go to slide 1/i }).parentElement!
    fireEvent.mouseEnter(dotsContainer)
    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(screen.getByRole('heading', { name: /define your budget/i })).toBeInTheDocument()
    fireEvent.mouseLeave(dotsContainer)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { name: /kids collection/i })).toBeInTheDocument()
  })

  it('wraps around from last slide to first', () => {
    render(<Carousel />)
    fireEvent.click(screen.getByRole('button', { name: /go to slide 4/i }))
    expect(screen.getByRole('heading', { name: /summer essentials/i })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { name: /define your budget/i })).toBeInTheDocument()
  })

  it('renders CTA buttons for the current slide', () => {
    render(<Carousel />)
    expect(screen.getByRole('button', { name: /shop the collection/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders carousel images with alt text', () => {
    render(<Carousel />)
    const img = screen.getByRole('img', { name: /define your budget/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('loading', 'eager')
  })

  it('uses lazy loading for non-first slides', () => {
    render(<Carousel />)
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    const img = screen.getByRole('img', { name: /kids collection/i })
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('focus on dots pauses auto-advance', () => {
    render(<Carousel />)
    const dot = screen.getByRole('button', { name: /go to slide 1/i })
    fireEvent.focus(dot)
    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(screen.getByRole('heading', { name: /define your budget/i })).toBeInTheDocument()
    fireEvent.blur(dot)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { name: /kids collection/i })).toBeInTheDocument()
  })
})
