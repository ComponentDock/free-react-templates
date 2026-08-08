import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the heading and all three days', () => {
    render(<Schedule />)
    expect(screen.getByRole('heading', { name: /Three Days of Innovation/i })).toBeInTheDocument()
    for (const day of ['Day 1', 'Day 2', 'Day 3']) {
      expect(screen.getByRole('heading', { name: day })).toBeInTheDocument()
    }
  })

  it('renders sessions with times', () => {
    render(<Schedule />)
    expect(
      screen.getByText(/Opening Keynote: Building Trustworthy AI Systems/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/Workshop: Building AI Agents with Tool Use/i)).toBeInTheDocument()
    expect(screen.getByText(/Closing Keynote: The Next Frontier/i)).toBeInTheDocument()
    expect(screen.getAllByText(/^[0-9]/)).toHaveLength(21)
  })
})
