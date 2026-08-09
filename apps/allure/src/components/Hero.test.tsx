import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

afterEach(() => {
  vi.useRealTimers()
})

describe('Hero', () => {
  it('renders the headline, subtitle, indicators, and prev/next box', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/show stopper/i)
    expect(screen.getByText('Jessica Smith. 22. Model.')).toBeInTheDocument()

    for (const label of ['01', '02', '03']) {
      expect(screen.getByRole('button', { name: `Go to slide ${label}` })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
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

    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/runway ready/i)
    expect(screen.getByRole('button', { name: 'Go to slide 02' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/the new face/i)

    // Wraps forward from the last slide back to the first.
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/show stopper/i)

    // Wraps backward from the first slide to the last.
    await user.click(screen.getByRole('button', { name: 'Previous' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/the new face/i)
  })

  it('jumps to a slide from its indicator', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 03' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/the new face/i)
    expect(screen.getByRole('button', { name: 'Go to slide 03' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('autoplays to the next slide', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/show stopper/i)

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/runway ready/i)

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/the new face/i)
  })
})
