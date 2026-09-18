import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading', () => {
    render(<Hero />)
    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings[0]).toHaveTextContent(/look/i)
  })

  it('renders exhibition date info', () => {
    render(<Hero />)
    expect(screen.getByText(/exhibition/i)).toBeInTheDocument()
  })

  it('renders a Read More CTA button', () => {
    render(<Hero />)
    const buttons = screen.getAllByRole('button', { name: /read more/i })
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders slide dot navigation', () => {
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots).toHaveLength(3)
  })

  it('allows switching slides via dots', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    await user.click(dots[1]!)
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
  })

  it('navigates to previous slide from slide 0 (wraps to last)', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const prevBtn = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevBtn)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
  })

  it('navigates to previous slide from non-zero slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    await user.click(dots[2]!)
    const prevBtn = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevBtn)
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
  })

  it('navigates to next slide from slide 0', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextBtn)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
  })

  it('navigates to next slide from non-last slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    await user.click(dots[1]!)
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextBtn)
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
  })

  it('navigates to next slide from last slide (wraps to first)', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    await user.click(dots[2]!)
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextBtn)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
  })

  it('auto-advances slides after timeout', async () => {
    vi.useFakeTimers()
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
    vi.useRealTimers()
  })
})
