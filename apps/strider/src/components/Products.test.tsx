import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products } from './Products'

describe('Products', () => {
  it('renders the section title', () => {
    render(<Products />)
    expect(screen.getByText('Latest Products')).toBeInTheDocument()
  })

  it('renders all four product cards', () => {
    render(<Products />)
    expect(screen.getByText('Classic Runner Sneakers')).toBeInTheDocument()
    expect(screen.getByText('Sport Elite Training Shoes')).toBeInTheDocument()
    expect(screen.getByText('Urban Street High Tops')).toBeInTheDocument()
    expect(screen.getByText('Performance Boost Runners')).toBeInTheDocument()
  })

  it('renders sale and original prices', () => {
    render(<Products />)
    expect(screen.getByText('$150.00')).toBeInTheDocument()
    expect(screen.getByText('$210.00')).toBeInTheDocument()
  })

  it('renders action buttons for each product', () => {
    render(<Products />)
    const bagButtons = screen.getAllByLabelText('Add to bag')
    expect(bagButtons.length).toBe(4)
    const heartButtons = screen.getAllByLabelText('Wishlist')
    expect(heartButtons.length).toBe(4)
  })
})
