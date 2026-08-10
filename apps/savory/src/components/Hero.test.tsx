import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

afterEach(() => {
  cleanup()
  vi.useRealTimers()
})

describe('Hero', () => {
  it('shows the first slide with a full-width image and a centered overlay card', () => {
    render(<Hero />)

    expect(screen.getByText('Chicken Salad')).toBeInTheDocument()
    expect(screen.getByText('Healthy Food')).toBeInTheDocument()
    expect(screen.getByText('July 11, 2018')).toBeInTheDocument()
    expect(screen.getByText('By Julia Stiles')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /chicken salad/i })).toBeInTheDocument()
  })

  it('advances to the following slide with the next arrow and wraps around with prev', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Mushrooms with pork chop')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Birthday cake with chocolate')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('Friend eggs with ham')).toBeInTheDocument()
  })

  it('wraps from the first slide to the last with the previous arrow', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('Birthday cake with chocolate')).toBeInTheDocument()
  })

  it('auto-advances on an interval', () => {
    vi.useFakeTimers()
    render(<Hero />)

    expect(screen.getByText('Chicken Salad')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Mushrooms with pork chop')).toBeInTheDocument()
  })

  it('stops auto-advancing when unmounted', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)

    unmount()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.queryByText('Mushrooms with pork chop')).not.toBeInTheDocument()
  })
})
