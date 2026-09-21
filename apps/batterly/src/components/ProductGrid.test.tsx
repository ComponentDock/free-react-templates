import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductGrid } from './ProductGrid'

describe('ProductGrid', () => {
  it('renders section heading', () => {
    render(<ProductGrid />)
    expect(screen.getByText('Our Products')).toBeInTheDocument()
    expect(screen.getByText('Cake & Pastry Collection')).toBeInTheDocument()
  })

  it('renders all 8 product cards', () => {
    render(<ProductGrid />)
    expect(screen.getByText('Dozen Cupcakes')).toBeInTheDocument()
    expect(screen.getByText('Cookies and Cream')).toBeInTheDocument()
    expect(screen.getByText('Gluten Free Mini Dozen')).toBeInTheDocument()
    expect(screen.getByText('Cookie Dough')).toBeInTheDocument()
    expect(screen.getByText('Vanilla Salted Caramel')).toBeInTheDocument()
    expect(screen.getByText('German Chocolate')).toBeInTheDocument()
    expect(screen.getByText('Dulce De Leche')).toBeInTheDocument()
    expect(screen.getByText('Mississippi Mud')).toBeInTheDocument()
  })

  it('displays correct prices', () => {
    render(<ProductGrid />)
    expect(screen.getAllByText('$32').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$30')).toBeInTheDocument()
    expect(screen.getByText('$31')).toBeInTheDocument()
    expect(screen.getByText('$25')).toBeInTheDocument()
    expect(screen.getByText('$5')).toBeInTheDocument()
    expect(screen.getByText('$14')).toBeInTheDocument()
    expect(screen.getByText('$8')).toBeInTheDocument()
  })

  it('renders category badges', () => {
    render(<ProductGrid />)
    expect(screen.getAllByText('Cupcake').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Cookie').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Cake').length).toBeGreaterThanOrEqual(1)
  })

  it('renders product images with alt text', () => {
    render(<ProductGrid />)
    expect(screen.getByAltText('Dozen Cupcakes')).toBeInTheDocument()
    expect(screen.getByAltText('Cookies and Cream')).toBeInTheDocument()
  })

  it('renders add to cart buttons', () => {
    render(<ProductGrid />)
    const cartBtns = screen.getAllByRole('button', { name: /add .* to cart/i })
    expect(cartBtns.length).toBe(8)
  })

  it('has add to cart buttons accessible via aria-label', async () => {
    const user = userEvent.setup()
    render(<ProductGrid />)
    const btn = screen.getByRole('button', { name: /Add Dozen Cupcakes to cart/i })
    await user.click(btn)
    // Button exists and is clickable
    expect(btn).toBeInTheDocument()
  })
})
