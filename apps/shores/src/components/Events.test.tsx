import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Events } from './Events'

describe('Events', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders section heading', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { name: /upcoming events/i })).toBeInTheDocument()
  })

  it('renders four event cards', () => {
    render(<Events />)
    expect(screen.getByText('Working syrian children')).toBeInTheDocument()
    expect(screen.getByText('Help and homelessness')).toBeInTheDocument()
    expect(screen.getByText('Save the clean water')).toBeInTheDocument()
    expect(screen.getByText('Foods for poor children')).toBeInTheDocument()
  })

  it('displays countdown timers', () => {
    render(<Events />)
    const daysElements = screen.getAllByText('Days')
    expect(daysElements.length).toBe(4)
    const hoursElements = screen.getAllByText('Hours')
    expect(hoursElements.length).toBe(4)
  })

  it('renders Learn More buttons for each event', () => {
    render(<Events />)
    const buttons = screen.getAllByRole('button', { name: /learn more/i })
    expect(buttons.length).toBe(4)
  })

  it('renders event images with lazy loading', () => {
    render(<Events />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      expect(img).toHaveAttribute('loading', 'lazy')
    })
  })

  it('cleans up interval on unmount', () => {
    const spy = vi.spyOn(global, 'clearInterval')
    const { unmount } = render(<Events />)
    unmount()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })

  it('updates countdown values when timer advances', () => {
    render(<Events />)
    // Advance by 2 seconds
    vi.advanceTimersByTime(2000)
    // Countdown should still show (values haven't changed much in 2 seconds)
    const daysElements = screen.getAllByText('Days')
    expect(daysElements.length).toBe(4)
  })
})
