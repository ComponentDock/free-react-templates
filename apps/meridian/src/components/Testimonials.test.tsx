import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { TESTIMONIALS } from '../data'
import { Testimonials } from './Testimonials'

afterEach(() => {
  vi.useRealTimers()
})

describe('Testimonials', () => {
  it('shows the first slide with quote, avatar, name and role', () => {
    render(<Testimonials />)
    const first = TESTIMONIALS[0]!
    expect(screen.getByText(first.quote)).toBeInTheDocument()
    expect(screen.getByText(`by ${first.name}`)).toBeInTheDocument()
    expect(screen.getByText(first.role)).toBeInTheDocument()
  })

  it('advances slides via the dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    expect(screen.getAllByRole('button', { name: /Go to testimonial \d/ })).toHaveLength(
      TESTIMONIALS.length,
    )
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    const third = TESTIMONIALS[2]!
    expect(screen.getByText(third.quote)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('autoplays to the next slide after five seconds', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    const second = TESTIMONIALS[1]!
    expect(screen.queryByText(second.quote)).not.toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(second.quote)).toBeInTheDocument()
  })

  it('cleans up the autoplay interval on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Testimonials />)
    unmount()
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(vi.getTimerCount()).toBe(0)
  })
})
