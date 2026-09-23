import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders all four stat values and labels', () => {
    render(<Counters />)
    expect(screen.getByText('2,536')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('6,784')).toBeInTheDocument()
    expect(screen.getByText('Total Projects')).toBeInTheDocument()
    expect(screen.getByText('1,059')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
    expect(screen.getByText('12,239')).toBeInTheDocument()
    expect(screen.getByText('Tickets Submitted')).toBeInTheDocument()
  })
})
