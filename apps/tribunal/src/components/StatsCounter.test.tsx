import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StatsCounter } from './StatsCounter'

describe('StatsCounter', () => {
  it('renders Qualified Lawyers stat', () => {
    render(<StatsCounter />)
    expect(screen.getByText('1,000')).toBeInTheDocument()
    expect(screen.getByText('Qualified Lawyers')).toBeInTheDocument()
  })

  it('renders Trusted Clients stat', () => {
    render(<StatsCounter />)
    expect(screen.getByText('12,000')).toBeInTheDocument()
    expect(screen.getByText('Trusted Clients')).toBeInTheDocument()
  })

  it('renders Won Cases stat', () => {
    render(<StatsCounter />)
    expect(screen.getByText('10,000')).toBeInTheDocument()
    expect(screen.getByText('Won Cases')).toBeInTheDocument()
  })

  it('renders Honors & Awards stat', () => {
    render(<StatsCounter />)
    expect(screen.getByText('12,921')).toBeInTheDocument()
    expect(screen.getByText('Honors & Awards')).toBeInTheDocument()
  })
})
