import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CountdownTimer } from './CountdownTimer'

describe('CountdownTimer', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders four countdown units', () => {
    const future = new Date(Date.now() + 86_400_000 * 2 + 3_600_000 * 5 + 60_000 * 30 + 10_000)
    render(<CountdownTimer targetDate={future} />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
    expect(screen.getByText('Sec')).toBeInTheDocument()
  })

  it('renders zero-padded numbers', () => {
    const future = new Date(Date.now() + 86_400_000 * 5)
    render(<CountdownTimer targetDate={future} />)
    const daysValue = screen.getByText('Days').closest('div')!.querySelector('span')!.textContent
    expect(daysValue).toMatch(/^\d{2}$/)
  })

  it('shows zeroed values when target date is in the past', () => {
    const past = new Date(Date.now() - 10_000)
    render(<CountdownTimer targetDate={past} />)
    const zeros = screen.getAllByText('00')
    expect(zeros.length).toBeGreaterThanOrEqual(4)
  })

  it('has accessible timer role', () => {
    const future = new Date(Date.now() + 86_400_000)
    render(<CountdownTimer targetDate={future} />)
    expect(screen.getByRole('timer')).toHaveAttribute('aria-label', 'Countdown timer')
  })

  it('clears interval on unmount', () => {
    vi.useFakeTimers()
    const future = new Date(Date.now() + 60_000)
    const { unmount } = render(<CountdownTimer targetDate={future} />)
    const spy = vi.spyOn(global, 'clearInterval')
    unmount()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })

  it('counts down over time', () => {
    vi.useFakeTimers()
    const future = new Date(Date.now() + 120_000)
    render(<CountdownTimer targetDate={future} />)
    const secsBefore = screen.getByText('Sec').closest('div')!.querySelector('span')!.textContent
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    const secsAfter = screen.getByText('Sec').closest('div')!.querySelector('span')!.textContent
    expect(secsAfter).not.toBe(secsBefore)
  })

  it('updates on hover for countdown units', async () => {
    const user = userEvent.setup()
    const future = new Date(Date.now() + 86_400_000)
    render(<CountdownTimer targetDate={future} />)
    const daysLabel = screen.getByText('Days')
    const unit = daysLabel.closest('div')!
    const numberSpan = unit.querySelector('span')!
    expect(numberSpan.className).toContain('text-brand-pink')
    await user.hover(numberSpan)
    expect(numberSpan.className).toContain('text-brand-pink-hover')
    await user.unhover(numberSpan)
    expect(numberSpan.className).toContain('text-brand-pink')
    expect(numberSpan.className).not.toContain('text-brand-pink-hover')
  })
})
