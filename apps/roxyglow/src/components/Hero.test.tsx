import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide content', () => {
    render(<Hero />)
    expect(screen.getByText('RoxyGlow')).toBeInTheDocument()
    expect(screen.getByText(/More than a hotel/)).toBeInTheDocument()
  })

  it('has a play button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Play video/i })).toBeInTheDocument()
  })

  it('renders slide navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Go to slide 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Go to slide 2/i })).toBeInTheDocument()
  })

  it('switches slide on click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /Go to slide 2/i }))
    expect(screen.getByText('Experience Epic Beauty')).toBeInTheDocument()
    expect(screen.getByText(/RoxyGlow Hotel & Resort/)).toBeInTheDocument()
  })

  it('auto-advances slides after 6 seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByText('RoxyGlow')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Experience Epic Beauty')).toBeInTheDocument()
  })
})
