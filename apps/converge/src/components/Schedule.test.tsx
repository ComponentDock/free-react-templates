import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the Schedule heading', () => {
    render(<Schedule />)
    expect(screen.getByRole('heading', { name: /schedule/i })).toBeInTheDocument()
  })

  it('renders day 1 and day 2 labels', () => {
    render(<Schedule />)
    expect(screen.getByText(/Day 1/)).toBeInTheDocument()
    expect(screen.getByText(/Day 2/)).toBeInTheDocument()
  })

  it('renders session titles', () => {
    render(<Schedule />)
    expect(screen.getAllByText('Grand Opening').length).toBe(2)
    expect(screen.getAllByText('Marketing 101').length).toBe(2)
    expect(screen.getAllByText('Coffee Break').length).toBe(2)
  })

  it('renders host names', () => {
    render(<Schedule />)
    expect(screen.getAllByText('Maria Smith').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('James Williams').length).toBeGreaterThanOrEqual(1)
  })

  it('renders dates', () => {
    render(<Schedule />)
    expect(screen.getByText(/February 12, 2025/)).toBeInTheDocument()
    expect(screen.getByText(/February 13, 2025/)).toBeInTheDocument()
  })
})
