import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { DealOfWeek } from './DealOfWeek'

describe('DealOfWeek', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading', () => {
    render(<DealOfWeek />)
    expect(screen.getByRole('heading', { name: /deal of the week/i })).toBeInTheDocument()
  })

  it('renders countdown timer units', () => {
    render(<DealOfWeek />)
    expect(screen.getByText('Day')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
    expect(screen.getByText('Sec')).toBeInTheDocument()
  })

  it('renders the shop now button', () => {
    render(<DealOfWeek />)
    expect(screen.getByRole('link', { name: /shop now/i })).toBeInTheDocument()
  })

  it('renders the deal product image', () => {
    render(<DealOfWeek />)
    const img = screen.getByAltText('Deal of the week product')
    expect(img).toBeInTheDocument()
  })

  it('displays initial countdown values', () => {
    render(<DealOfWeek />)
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('23')).toBeInTheDocument()
  })

  it('counts down seconds via interval', () => {
    render(<DealOfWeek />)
    expect(screen.getByText('23')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText('22')).toBeInTheDocument()
  })
})
