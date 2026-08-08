import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsStrip } from './StatsStrip'

describe('StatsStrip', () => {
  it('shows four brand-green statistics', () => {
    render(<StatsStrip />)
    expect(screen.getByText('$2B+')).toBeInTheDocument()
    expect(screen.getByText('Total Sales Volume')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Properties Sold')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
    expect(screen.getByText('Client Satisfaction')).toBeInTheDocument()
  })
})
