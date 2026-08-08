import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the first slide content', () => {
    render(<Hero />)
    expect(screen.getByText('Architecture Firm')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /We Love Modern Designs/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View our works' })).toBeInTheDocument()
  })

  it('advances to the second slide with the next button and back with prev', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Since - 2018')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /We Create Amazing Architecture Designs/ }),
    ).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: /We Love Modern Designs/ }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the dot indicators', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByText('Since - 2018')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Go to slide 1' }))
    expect(
      screen.getByRole('heading', { level: 1, name: /We Love Modern Designs/ }),
    ).toBeInTheDocument()
  })

  it('auto-advances to the next slide after six seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByText('Architecture Firm')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Since - 2018')).toBeInTheDocument()
  })
})
