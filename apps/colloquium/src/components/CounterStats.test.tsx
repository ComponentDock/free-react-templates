import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CounterStats } from './CounterStats'

describe('CounterStats', () => {
  it('renders all stat values and labels', () => {
    render(<CounterStats />)
    expect(screen.getByText('301')).toBeInTheDocument()
    expect(screen.getByText('Places')).toBeInTheDocument()
    expect(screen.getByText('102')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('1050')).toBeInTheDocument()
    expect(screen.getByText('Photos')).toBeInTheDocument()
    expect(screen.getByText('61')).toBeInTheDocument()
    expect(screen.getByText('Speakers')).toBeInTheDocument()
  })
})
