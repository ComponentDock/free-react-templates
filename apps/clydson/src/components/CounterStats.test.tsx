import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CounterStats from './CounterStats'

describe('CounterStats', () => {
  it('renders all four stat items', () => {
    render(<CounterStats />)
    expect(screen.getByText('750')).toBeInTheDocument()
    expect(screen.getByText('Project Complete')).toBeInTheDocument()
    expect(screen.getByText('568')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('478')).toBeInTheDocument()
    expect(screen.getByText('Cups of coffee')).toBeInTheDocument()
    expect(screen.getByText('780')).toBeInTheDocument()
    expect(screen.getByText('Years experienced')).toBeInTheDocument()
  })
})
