import { render, screen, act } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { ExclusiveDeal } from './ExclusiveDeal'

describe('ExclusiveDeal', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByText('Exclusive Hot Deal Ends Soon!')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByText(/Who are in extremely love/)).toBeInTheDocument()
  })

  it('renders the Shop Now button', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })

  it('renders countdown timer blocks', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
    expect(screen.getByText('Secs')).toBeInTheDocument()
  })

  it('displays initial countdown values', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByText('150')).toBeInTheDocument()
    expect(screen.getByText('23')).toBeInTheDocument()
    expect(screen.getByText('47')).toBeInTheDocument()
    expect(screen.getByText('59')).toBeInTheDocument()
  })

  it('counts down seconds', () => {
    render(<ExclusiveDeal />)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('58')).toBeInTheDocument()
  })

  it('counts down minutes when seconds reach 0', () => {
    render(<ExclusiveDeal />)
    act(() => {
      vi.advanceTimersByTime(60000)
    })
    expect(screen.getByText('46')).toBeInTheDocument()
    expect(screen.getByText('59')).toBeInTheDocument()
  })

  it('counts down to zero and stops', () => {
    render(<ExclusiveDeal initialDays={0} initialHours={0} initialMinutes={0} initialSeconds={3} />)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('02')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('01')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getAllByText('00').length).toBe(4)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getAllByText('00').length).toBe(4)
  })

  it('renders the product image', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByAltText('Exclusive deal product')).toBeInTheDocument()
  })

  it('shows Add to Bag button in product overlay', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByLabelText('Add to bag')).toBeInTheDocument()
  })

  it('shows product prices', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByText('$150.00')).toBeInTheDocument()
    expect(screen.getByText('$210.00')).toBeInTheDocument()
  })
})
