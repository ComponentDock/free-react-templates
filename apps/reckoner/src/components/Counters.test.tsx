import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders all counter values', () => {
    render(<Counters />)

    expect(screen.getByText('250')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('1000')).toBeInTheDocument()
  })

  it('renders all counter labels', () => {
    render(<Counters />)

    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Team Members')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
  })

  it('renders plus signs after counter values', () => {
    render(<Counters />)

    const plusSigns = screen.getAllByText('+')
    expect(plusSigns.length).toBe(4)
  })
})
