import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewProducts } from './NewProducts'

describe('NewProducts', () => {
  it('renders the section heading', () => {
    render(<NewProducts />)
    expect(screen.getByRole('heading', { level: 2, name: /New Products/i })).toBeInTheDocument()
  })

  it('renders the large featured product', () => {
    render(<NewProducts />)
    expect(screen.getByText(/Collection of 2024/i)).toBeInTheDocument()
    expect(screen.getByText(/Men's Summer T-Shirt/i)).toBeInTheDocument()
    expect(screen.getByText('$120.70')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Add to Cart/i })).toBeInTheDocument()
  })

  it('renders three small product cards', () => {
    render(<NewProducts />)
    expect(screen.getByText(/Nike Latest Sneaker/i)).toBeInTheDocument()
    expect(screen.getByText(/Round Purse for Women/i)).toBeInTheDocument()
    expect(screen.getByText(/Men Stylist Wallet/i)).toBeInTheDocument()
  })
})
