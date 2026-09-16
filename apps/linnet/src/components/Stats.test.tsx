import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all stat counters', () => {
    render(<Stats />)
    expect(screen.getAllByText('1,172').length).toBe(2)
    expect(screen.getByText('1,000')).toBeInTheDocument()
    expect(screen.getByText('1,200')).toBeInTheDocument()
    expect(screen.getByText('Projects Complete')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })
})
