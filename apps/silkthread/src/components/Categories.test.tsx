import { describe, it, expect, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders category headings', () => {
    render(<Categories />)
    expect(screen.getByText(/Clothings Hot/)).toBeInTheDocument()
    expect(screen.getByText('Shoe Collection')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Accessories/ })).toBeInTheDocument()
  })

  it('renders deal of the week info', () => {
    render(<Categories />)
    expect(screen.getByText('Deal Of The Week')).toBeInTheDocument()
    expect(screen.getByText('Multi-pocket Chest Bag Black')).toBeInTheDocument()
  })

  it('renders sale sticker with price', () => {
    render(<Categories />)
    expect(screen.getByText('Sale Of')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
  })

  it('renders countdown timer units', () => {
    render(<Categories />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders Shop now button', () => {
    render(<Categories />)
    expect(screen.getByText('Shop now')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<Categories />)
    expect(screen.getByLabelText('Categories and deals')).toBeInTheDocument()
  })

  it('countdown stops when reaching zero', () => {
    vi.useFakeTimers()
    render(<Categories />)
    act(() => {
      vi.advanceTimersByTime(3 * 86400 * 1000 + 1 * 3600 * 1000 + 50 * 60 * 1000 + 18 * 1000)
    })
    expect(screen.getAllByText('0').length).toBe(4)
    vi.useRealTimers()
  })

  it('countdown ticks each second', () => {
    vi.useFakeTimers()
    render(<Categories />)
    const secondsBefore = screen.getByText('18')
    expect(secondsBefore).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('17')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
