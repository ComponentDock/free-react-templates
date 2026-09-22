import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the schedule section', () => {
    render(<Schedule />)
    expect(screen.getByRole('region', { name: /class schedule/i })).toBeInTheDocument()
  })

  it('renders day tabs', () => {
    render(<Schedule />)
    expect(screen.getByRole('tab', { name: /sunday/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /monday/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /friday/i })).toBeInTheDocument()
  })

  it('switches day tab on click', () => {
    render(<Schedule />)
    const mondayTab = screen.getByRole('tab', { name: /monday/i })
    fireEvent.click(mondayTab)
    expect(mondayTab).toHaveAttribute('aria-selected', 'true')
  })

  it('shows classes in table', () => {
    render(<Schedule />)
    const joinBtns = screen.getAllByRole('button', { name: /join now/i })
    expect(joinBtns.length).toBeGreaterThan(0)
  })
})
