import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('shows 4 stat counters with labels', () => {
    render(<Counter />)
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('Pizza Branches')).toBeInTheDocument()
    expect(screen.getByText('85')).toBeInTheDocument()
    expect(screen.getByText('Number of Awards')).toBeInTheDocument()
    expect(screen.getByText('10,567')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('Staff')).toBeInTheDocument()
  })
})
