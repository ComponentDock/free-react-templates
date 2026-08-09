import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

afterEach(() => {
  vi.useRealTimers()
})

describe('Hero', () => {
  it('renders the headline, Read More button, indicators, and prev/next controls', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /style is forever/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()

    for (const label of ['01', '02', '03']) {
      expect(screen.getByRole('button', { name: `Go to slide ${label}` })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('marks the first indicator as current', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Go to slide 01' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 02' })).toHaveAttribute(
      'aria-current',
      'false',
    )
  })

  it('advances and wraps with Next and Previous', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 02' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 03' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    // Wraps forward from the last slide back to the first.
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 01' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    // Wraps backward from the first slide to the last.
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 03' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide from its indicator', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 03' }))
    expect(screen.getByRole('button', { name: 'Go to slide 03' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('autoplays to the next slide', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Go to slide 01' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('button', { name: 'Go to slide 02' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(screen.getByRole('button', { name: 'Go to slide 01' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
