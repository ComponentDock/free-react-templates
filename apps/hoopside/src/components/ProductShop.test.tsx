import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductShop } from './ProductShop'

describe('ProductShop', () => {
  it('renders the section heading', () => {
    render(<ProductShop />)
    expect(screen.getByText('Basketball Store')).toBeInTheDocument()
  })

  it('renders category filter buttons', () => {
    render(<ProductShop />)
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /shoes/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /t-shirt/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /jacket/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /accessories/i })).toBeInTheDocument()
  })

  it('renders product names and prices', () => {
    render(<ProductShop />)
    expect(screen.getByText('Adidas Harden vol 4 Gila Monster')).toBeInTheDocument()
    const prices = screen.getAllByText('$91.00')
    expect(prices.length).toBe(4)
  })

  it('renders Add to Cart buttons', () => {
    render(<ProductShop />)
    const cartButtons = screen.getAllByLabelText('Add to cart')
    expect(cartButtons.length).toBe(4)
  })

  it('switches category on click', async () => {
    const user = userEvent.setup()
    render(<ProductShop />)
    await user.click(screen.getByRole('button', { name: /shoes/i }))
    expect(screen.getByText('Basketball Store')).toBeInTheDocument()
  })
})
