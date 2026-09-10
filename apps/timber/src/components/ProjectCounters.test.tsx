import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCounters } from './ProjectCounters'

describe('ProjectCounters', () => {
  it('renders four stat counters', () => {
    render(<ProjectCounters />)
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('49')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
  })

  it('renders counter labels', () => {
    render(<ProjectCounters />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Employees')).toBeInTheDocument()
    expect(screen.getByText('Constructor')).toBeInTheDocument()
    expect(screen.getByText('Partners')).toBeInTheDocument()
  })

  it('has a dark background', () => {
    render(<ProjectCounters />)
    const section = screen.getByText('Projects').closest('section')!
    expect(section.className).toContain('bg-dark')
  })
})
