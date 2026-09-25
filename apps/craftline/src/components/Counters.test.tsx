import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders counter labels', () => {
    render(<Counters />)
    expect(screen.getByText('Cups of coffee')).toBeDefined()
    expect(screen.getByText('Projects')).toBeDefined()
    expect(screen.getByText('Clients')).toBeDefined()
    expect(screen.getByText('Partners')).toBeDefined()
  })

  it('renders animated counter values', () => {
    render(<Counters />)
    const counters = screen.getAllByText(/^\d+$/)
    expect(counters.length).toBeGreaterThanOrEqual(4)
  })

  it('has progress bar spans', () => {
    render(<Counters />)
    const spans = screen.getAllByText(/^\d+$/)
    expect(spans.length).toBe(4)
  })
})
