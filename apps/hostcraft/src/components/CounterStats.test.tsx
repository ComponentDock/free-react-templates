import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CounterStats } from './CounterStats'

describe('CounterStats', () => {
  it('renders subheading and 4 stat counters', () => {
    render(<CounterStats />)
    expect(screen.getByText('More than 12,000 websites trusted hosted')).toBeInTheDocument()
    expect(screen.getByText('12,000')).toBeInTheDocument()
    expect(screen.getByText('CMS Installation')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
    expect(screen.getByText('10,000')).toBeInTheDocument()
    expect(screen.getByText('Registered Domains')).toBeInTheDocument()
    expect(screen.getByText('9,000')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Customers')).toBeInTheDocument()
  })
})
