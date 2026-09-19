import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductSlider } from './ProductSlider'

describe('ProductSlider', () => {
  it('renders section title', () => {
    render(<ProductSlider />)
    expect(screen.getByText('New Product')).toBeInTheDocument()
    expect(screen.getByText('Collection')).toBeInTheDocument()
  })

  it('renders all product cards', () => {
    render(<ProductSlider />)
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument()
    expect(screen.getByText('Smart Watch')).toBeInTheDocument()
    expect(screen.getByText('Running Shoes')).toBeInTheDocument()
    expect(screen.getByText('Leather Backpack')).toBeInTheDocument()
    expect(screen.getByText('Sunglasses')).toBeInTheDocument()
  })
})
