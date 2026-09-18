import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders all four counter values', () => {
    render(<Counters />)
    expect(screen.getByText('2,536')).toBeInTheDocument()
    expect(screen.getByText('6,784')).toBeInTheDocument()
    expect(screen.getByText('1,059')).toBeInTheDocument()
    expect(screen.getByText('12,239')).toBeInTheDocument()
  })

  it('renders all counter labels', () => {
    render(<Counters />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Total Projects')).toBeInTheDocument()
    expect(screen.getByText('Cups Coffee')).toBeInTheDocument()
    expect(screen.getByText('Tickets Submitted')).toBeInTheDocument()
  })
})
