import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsCounter } from './StatsCounter'

describe('StatsCounter', () => {
  it('renders all four stat items', () => {
    render(<StatsCounter />)
    expect(screen.getByText('Years')).toBeInTheDocument()
    expect(screen.getByText('Cases')).toBeInTheDocument()
    expect(screen.getByText('Awards')).toBeInTheDocument()
    expect(screen.getByText('Experts')).toBeInTheDocument()
  })

  it('renders counter values', () => {
    render(<StatsCounter />)
    expect(screen.getAllByText('50+').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('8,500+')).toBeInTheDocument()
    expect(screen.getByText('20')).toBeInTheDocument()
  })

  it('renders section heading', () => {
    render(<StatsCounter />)
    expect(screen.getByText(/Our Track Record/i)).toBeInTheDocument()
    expect(screen.getByText(/By The Numbers/i)).toBeInTheDocument()
  })
})
