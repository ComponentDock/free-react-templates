import { render, screen } from '@testing-library/react'
import { StatsCounter } from './StatsCounter'
import { describe, expect, it } from 'vitest'

describe('StatsCounter', () => {
  it('renders all 4 stats', () => {
    render(<StatsCounter />)
    expect(screen.getByText('5000+')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('4560+')).toBeInTheDocument()
    expect(screen.getByText('Perfect Bodies')).toBeInTheDocument()
    expect(screen.getByText('570+')).toBeInTheDocument()
    expect(screen.getByText('Working Hours')).toBeInTheDocument()
    expect(screen.getByText('900+')).toBeInTheDocument()
    expect(screen.getByText('Success Stories')).toBeInTheDocument()
  })
})
