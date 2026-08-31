import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { TestimonialCarousel } from './TestimonialCarousel'

describe('TestimonialCarousel', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the section heading', () => {
    render(<TestimonialCarousel />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders the initial testimonial card', () => {
    render(<TestimonialCarousel />)
    expect(screen.getByText(/Joy Smith/)).toBeInTheDocument()
  })

  it('renders navigation dots for each slide', () => {
    render(<TestimonialCarousel />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(3)
  })

  it('marks the first dot as active initially', () => {
    render(<TestimonialCarousel />)
    const firstDot = screen.getByRole('button', { name: 'Go to slide 1' })
    expect(firstDot).toHaveAttribute('aria-pressed', 'true')
  })

  it('navigates to next slide on right arrow click', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText(/Rony Smith/)).toBeInTheDocument()
  })

  it('wraps forward from last slide to first', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)
    await user.click(screen.getByLabelText('Next slide'))
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText(/John Doe/)).toBeInTheDocument()
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText(/Joy Smith/)).toBeInTheDocument()
  })

  it('wraps backward from first slide to last', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText(/John Doe/)).toBeInTheDocument()
  })

  it('navigates backward from non-first slide', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)
    // Go to slide 2
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText(/Rony Smith/)).toBeInTheDocument()
    // Go back to slide 1
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText(/Joy Smith/)).toBeInTheDocument()
  })

  it('navigates to a specific slide via dot click', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByText(/John Doe/)).toBeInTheDocument()
  })

  it('auto-advances slides after timeout', () => {
    vi.useFakeTimers()
    render(<TestimonialCarousel />)
    expect(screen.getByText(/Joy Smith/)).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(/Rony Smith/)).toBeInTheDocument()
  })

  it('applies the light gray background', () => {
    const { container } = render(<TestimonialCarousel />)
    const section = container.querySelector('section')!
    expect(section).toHaveClass('bg-[rgba(0,0,0,0.05)]')
  })
})
