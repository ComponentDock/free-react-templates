import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { DealOfWeek } from './DealOfWeek'

describe('DealOfWeek', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the section heading', () => {
    render(<DealOfWeek />)
    expect(screen.getByRole('heading', { name: /hodina watch/i })).toBeInTheDocument()
  })

  it('renders the week deal label', () => {
    render(<DealOfWeek />)
    expect(screen.getByText('Week Deal')).toBeInTheDocument()
  })

  it('renders the countdown timer units', () => {
    render(<DealOfWeek />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
    expect(screen.getByText('Secs')).toBeInTheDocument()
  })

  it('renders the Shop Now button', () => {
    render(<DealOfWeek />)
    expect(screen.getByRole('link', { name: /shop now/i })).toBeInTheDocument()
  })

  it('renders the product image', () => {
    render(<DealOfWeek />)
    expect(screen.getByRole('img', { name: /deal of the week product/i })).toBeInTheDocument()
  })

  it('shows countdown values as padded strings', () => {
    render(<DealOfWeek />)
    // At least shows "00" padded values
    const allText = document.body.textContent ?? ''
    expect(allText).toMatch(/\d{2}/)
  })

  it('counts down seconds over time', async () => {
    vi.useFakeTimers()
    const target = new Date(Date.now() + 1000 * 65) // 1 min 5 sec from now
    render(<DealOfWeek targetDate={target} />)

    // Initial seconds should be 05
    expect(screen.getByText('05')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    // Now should be 03
    expect(screen.getByText('03')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
