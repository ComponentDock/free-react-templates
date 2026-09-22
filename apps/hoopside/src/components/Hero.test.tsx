import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('National Leagues 2025 Season Begins')).toBeInTheDocument()
  })

  it('renders countdown labels', () => {
    render(<Hero />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders Book Tickets button', () => {
    render(<Hero />)
    expect(screen.getByText('Book Tickets')).toBeInTheDocument()
  })

  it('renders event info', () => {
    render(<Hero />)
    expect(screen.getByText(/Jun 30, 2025/)).toBeInTheDocument()
  })

  it('shows active countdown when event is in the future', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2025-12-30T10:00:00'))
    render(<Hero />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Book Tickets')).toBeInTheDocument()
  })
})
