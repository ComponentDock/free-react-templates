import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StatsCounter } from './StatsCounter'

describe('StatsCounter', () => {
  it('renders all four stats', () => {
    render(<StatsCounter />)
    expect(screen.getByText('1,000')).toBeInTheDocument()
    expect(screen.getByText('12,000')).toBeInTheDocument()
    expect(screen.getByText('10,000')).toBeInTheDocument()
    expect(screen.getByText('12,921')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<StatsCounter />)
    expect(screen.getByText('Years on the market')).toBeInTheDocument()
    expect(screen.getByText('Operational Brigades')).toBeInTheDocument()
    expect(screen.getByText('Units of Engineering')).toBeInTheDocument()
    expect(screen.getByText('Employees of the company')).toBeInTheDocument()
  })

  it('renders with light background', () => {
    render(<StatsCounter />)
    const section = screen.getByText('1,000').closest('section')
    expect(section).toHaveClass('bg-gray-50')
  })
})
