import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide heading and button', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Business Theme Creator')).toBeInTheDocument()
    expect(screen.getByText('See Our Project')).toBeInTheDocument()
  })

  it('advances slides automatically after 5 seconds', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Business Theme Creator')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByText('Digital Marketing Experts')).toBeInTheDocument()
  })

  it('navigates to previous slide', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText('Creative Solutions for Growth')).toBeInTheDocument()
  })

  it('navigates to next slide', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('Digital Marketing Experts')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Go to slide 3'))
    expect(screen.getByText('Creative Solutions for Growth')).toBeInTheDocument()
  })

  it('has an aria-label for the slider', () => {
    render(<HeroSlider />)
    expect(screen.getByLabelText('Hero slider')).toBeInTheDocument()
  })

  it('cleans up timer on unmount', () => {
    const { unmount } = render(<HeroSlider />)
    unmount()
  })

  it('auto-advances after navigating via buttons', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('Digital Marketing Experts')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByText('Creative Solutions for Growth')).toBeInTheDocument()
  })
})
