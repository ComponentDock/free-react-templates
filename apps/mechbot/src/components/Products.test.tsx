import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products } from './Products'

describe('Products', () => {
  it('renders the section heading', () => {
    render(<Products />)
    expect(screen.getByRole('heading', { name: 'Our Products' })).toBeInTheDocument()
  })

  it('renders all three product cards', () => {
    render(<Products />)
    expect(screen.getByRole('heading', { name: 'Mechbot Alpha' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mechbot Pro' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mechbot Rover' })).toBeInTheDocument()
  })

  it('displays prices and add-to-cart buttons for each product', () => {
    render(<Products />)
    expect(screen.getByText('$299')).toBeInTheDocument()
    expect(screen.getByText('$599')).toBeInTheDocument()
    expect(screen.getByText('$449')).toBeInTheDocument()
    const cartButtons = screen.getAllByRole('button', { name: /Add to Cart/i })
    expect(cartButtons).toHaveLength(3)
  })
})
