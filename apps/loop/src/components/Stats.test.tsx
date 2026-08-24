import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all four stat counters', () => {
    render(<Stats />)
    expect(screen.getByText('Stats')).toBeInTheDocument()
    expect(screen.getByText('230')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('229')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('Leadership')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
  })
})
