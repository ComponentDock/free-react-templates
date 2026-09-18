import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders all four feature titles', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Drinks' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sea Foods' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cup Coffees' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fresh Salad' })).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Refreshing beverages/)).toBeInTheDocument()
    expect(screen.getByText(/Freshly caught seafood/)).toBeInTheDocument()
    expect(screen.getByText(/Premium roasted beans/)).toBeInTheDocument()
    expect(screen.getByText(/Garden-fresh greens/)).toBeInTheDocument()
  })
})
