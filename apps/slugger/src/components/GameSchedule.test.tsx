import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { GameSchedule } from './GameSchedule'

describe('GameSchedule', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading and the first page of schedule cards', () => {
    render(<GameSchedule />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/game schedule/i)
    expect(screen.getByRole('heading', { name: /sluggers vs jacksonville/i })).toBeInTheDocument()
    expect(screen.getAllByText('Home @ Arena').length).toBe(3)
    expect(screen.getByText('June 7, 2018')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Watch Game' }).length).toBeGreaterThan(0)
  })

  it('advances automatically with green dot indicators', () => {
    render(<GameSchedule />)
    const firstDot = screen.getByRole('button', { name: 'Go to slide 1' })
    expect(firstDot).toHaveClass('bg-brand')

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveClass('bg-brand')
    expect(firstDot).not.toHaveClass('bg-brand')
  })

  it('jumps to a page when a dot is clicked', () => {
    render(<GameSchedule />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveClass('bg-brand')
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveClass('bg-brand')
  })
})
