import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductCatalog } from './ProductCatalog'

describe('ProductCatalog', () => {
  it('renders 4 product cards on dark background', () => {
    render(<ProductCatalog />)
    expect(screen.getByText('Featured Products')).toBeInTheDocument()
    expect(screen.getByText('Smart Watch Pro')).toBeInTheDocument()
    expect(screen.getByText('Smart Watch Air')).toBeInTheDocument()
    expect(screen.getByText('Smart Watch Ultra')).toBeInTheDocument()
    expect(screen.getByText('Smart Watch Lite')).toBeInTheDocument()
  })

  it('each card has name, price, and Pre Order button', () => {
    render(<ProductCatalog />)
    expect(screen.getByText('$399.00')).toBeInTheDocument()
    expect(screen.getByText('$299.00')).toBeInTheDocument()
    expect(screen.getByText('$499.00')).toBeInTheDocument()
    expect(screen.getByText('$199.00')).toBeInTheDocument()
    const preOrderButtons = screen.getAllByText('Pre Order')
    expect(preOrderButtons).toHaveLength(4)
  })
})
