import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide headline', () => {
    render(<Hero />)
    expect(screen.getByText("Hi! I'm Ford")).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('I am a Designer')).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Download CV')).toBeInTheDocument()
    expect(screen.getByText('View Portfolio')).toBeInTheDocument()
  })

  it('renders navigation dots', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument()
  })

  it('renders prev/next arrows', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('navigates to next slide on next button click', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Hero />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument()
  })

  it('navigates to previous slide on prev button click', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Hero />)
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument()
  })

  it('auto-advances slides', () => {
    render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument()
  })

  it('navigates to specific slide via dot click', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Hero />)
    await user.click(screen.getByLabelText('Go to slide 2'))
    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument()
  })
})
