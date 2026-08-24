import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsCounter } from './StatsCounter'

describe('StatsCounter', () => {
  it('renders heading and stat items', () => {
    render(<StatsCounter />)
    expect(screen.getByText('Technical Statistics')).toBeInTheDocument()
    expect(screen.getByText('3,000')).toBeInTheDocument()
    expect(screen.getByText('Happy Readers')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('Books Written')).toBeInTheDocument()
    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText('Projects Done')).toBeInTheDocument()
  })

  it('has parallax background', () => {
    render(<StatsCounter />)
    const bg = document.querySelector('[aria-hidden="true"]')
    expect(bg).toBeInTheDocument()
  })
})
