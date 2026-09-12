import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders counters', () => {
    render(<Clients />)
    expect(screen.getByText('2000+')).toBeInTheDocument()
    expect(screen.getByText('Loan Approval')).toBeInTheDocument()
    expect(screen.getByText('99%')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Customers')).toBeInTheDocument()
  })

  it('renders client images', () => {
    render(<Clients />)
    expect(screen.getByAltText('Client 1')).toBeInTheDocument()
    expect(screen.getByAltText('Client 2')).toBeInTheDocument()
  })

  it('renders 4 grid items', () => {
    const { container } = render(<Clients />)
    const grid = container.querySelector('.grid')!
    expect(grid.children).toHaveLength(4)
  })
})
