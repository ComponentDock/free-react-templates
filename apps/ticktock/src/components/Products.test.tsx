import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products } from './Products'

describe('Products', () => {
  it('renders section heading', () => {
    render(<Products />)
    expect(screen.getByText(/some features that made us unique/i)).toBeInTheDocument()
  })

  it('renders all four product cards with prices', () => {
    render(<Products />)
    expect(screen.getByText('Classic Black')).toBeInTheDocument()
    expect(screen.getByText('£399.00')).toBeInTheDocument()
    expect(screen.getByText('Rose Gold')).toBeInTheDocument()
    expect(screen.getByText('£449.00')).toBeInTheDocument()
    expect(screen.getByText('Silver Elite')).toBeInTheDocument()
    expect(screen.getByText('£499.00')).toBeInTheDocument()
    expect(screen.getByText('Titanium Pro')).toBeInTheDocument()
    expect(screen.getByText('£599.00')).toBeInTheDocument()
  })

  it('renders Pre Order buttons', () => {
    render(<Products />)
    const buttons = screen.getAllByText(/pre order/i)
    expect(buttons).toHaveLength(4)
  })
})
