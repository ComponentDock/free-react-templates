import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Feedback } from './Feedback'

describe('Feedback', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the heading and the first testimonial slide', () => {
    render(<Feedback />)
    expect(
      screen.getByRole('heading', { name: 'Enjoy our Client\u2019s Feedback' }),
    ).toBeInTheDocument()
    const figure = screen.getByRole('blockquote').closest('figure') as HTMLElement
    expect(within(figure).getByText('Fannie Rowe')).toBeInTheDocument()
    expect(within(figure).getByText('Marketing Manager')).toBeInTheDocument()
  })

  it('advances to the next slide via the next control', () => {
    render(<Feedback />)
    const first = screen.getByRole('blockquote').textContent
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('blockquote').textContent).not.toBe(first)
  })

  it('returns to the previous slide via the prev control', () => {
    render(<Feedback />)
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    const second = screen.getByRole('blockquote').textContent
    fireEvent.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByRole('blockquote').textContent).not.toBe(second)
  })

  it('auto-advances on a timer', () => {
    render(<Feedback />)
    const first = screen.getByRole('blockquote').textContent
    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(screen.getByRole('blockquote').textContent).not.toBe(first)
  })
})
