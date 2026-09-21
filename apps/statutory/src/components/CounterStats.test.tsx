import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CounterStats } from './CounterStats'

describe('CounterStats', () => {
  it('renders all four stats', () => {
    render(<CounterStats />)
    expect(screen.getByText('3,000')).toBeInTheDocument()
    expect(screen.getByText('Trusted Clients')).toBeInTheDocument()
    expect(screen.getByText('1,000')).toBeInTheDocument()
    expect(screen.getByText("Honor's & Awards")).toBeInTheDocument()
    expect(screen.getByText('2,000')).toBeInTheDocument()
    expect(screen.getByText('Expert Lawyers')).toBeInTheDocument()
    expect(screen.getByText('10,540')).toBeInTheDocument()
    expect(screen.getByText('Successful Cases')).toBeInTheDocument()
  })
})
