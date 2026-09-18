import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all four stat items', () => {
    render(<Stats />)
    expect(screen.getByText(/4,800/)).toBeInTheDocument()
    expect(screen.getByText(/Projects Completed/)).toBeInTheDocument()
    expect(screen.getByText(/14,000/)).toBeInTheDocument()
    expect(screen.getByText(/Total Products/)).toBeInTheDocument()
    expect(screen.getByText(/200/)).toBeInTheDocument()
    expect(screen.getByText(/Services Provide/)).toBeInTheDocument()
    expect(screen.getByText(/71,650/)).toBeInTheDocument()
    expect(screen.getByText(/Satisfied Customers/)).toBeInTheDocument()
  })
})
