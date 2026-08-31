import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide by default', () => {
    render(<Carousel />)
    expect(screen.getByText('Creative Portfolios')).toBeInTheDocument()
    expect(
      screen.getByText('Showcase your best work with stunning visual presentations'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Gallery' })).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    render(<Carousel />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('renders navigation dots', () => {
    render(<Carousel />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toBeInTheDocument()
  })

  it('advances to next slide on right arrow click', () => {
    render(<Carousel />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
    expect(screen.queryByText('Creative Portfolios')).not.toBeInTheDocument()
  })

  it('goes to previous slide on left arrow click', () => {
    render(<Carousel />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('Creative Portfolios')).toBeInTheDocument()
  })

  it('wraps around from last slide to first on next', () => {
    render(<Carousel />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Visual Storytelling')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Creative Portfolios')).toBeInTheDocument()
  })

  it('wraps around from first slide to last on previous', () => {
    render(<Carousel />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('Visual Storytelling')).toBeInTheDocument()
  })

  it('navigates to a specific slide via dot click', () => {
    render(<Carousel />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByText('Visual Storytelling')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
  })

  it('auto-advances slides after 5 seconds', () => {
    render(<Carousel />)
    expect(screen.getByText('Creative Portfolios')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Visual Storytelling')).toBeInTheDocument()
  })

  it('pauses auto-advance on mouse enter', () => {
    const { container } = render(<Carousel />)
    const section = container.querySelector('section')!
    fireEvent.mouseEnter(section)
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(screen.getByText('Creative Portfolios')).toBeInTheDocument()
  })

  it('resumes auto-advance on mouse leave', () => {
    const { container } = render(<Carousel />)
    const section = container.querySelector('section')!
    fireEvent.mouseEnter(section)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Creative Portfolios')).toBeInTheDocument()
    fireEvent.mouseLeave(section)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
  })

  it('pauses on focus and resumes on blur', () => {
    const { container } = render(<Carousel />)
    const section = container.querySelector('section')!
    fireEvent.focusIn(section)
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(screen.getByText('Creative Portfolios')).toBeInTheDocument()
    fireEvent.focusOut(section)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
  })

  it('displays a background image for the current slide', () => {
    const { container } = render(<Carousel />)
    const img = container.querySelector('section img') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('picsum.photos/seed/carouselhub-1')
  })
})
