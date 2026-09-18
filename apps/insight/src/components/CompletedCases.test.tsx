import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CompletedCases } from './CompletedCases'

describe('CompletedCases', () => {
  it('renders heading and stat counters', () => {
    render(<CompletedCases />)
    expect(screen.getByText('Completed Cases')).toBeInTheDocument()
    expect(screen.getByText('450')).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('renders marketing content', () => {
    render(<CompletedCases />)
    expect(screen.getByText('Marketing Strategy')).toBeInTheDocument()
    expect(screen.getByText('Brand Development')).toBeInTheDocument()
    expect(screen.getByText('Digital Transformation')).toBeInTheDocument()
  })
})
