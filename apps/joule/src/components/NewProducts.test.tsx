import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { NewProducts } from './NewProducts'

describe('NewProducts', () => {
  it('renders section title', () => {
    render(<NewProducts />)
    expect(screen.getByText('New Products')).toBeInTheDocument()
  })

  it('renders category tabs', () => {
    render(<NewProducts />)
    expect(screen.getByRole('button', { name: 'Laptops' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Smartphones' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cameras' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accessories' })).toBeInTheDocument()
  })

  it('shows product cards for active tab (Laptops)', () => {
    render(<NewProducts />)
    expect(screen.getByText('MacBook Pro')).toBeInTheDocument()
    expect(screen.getByText('$1299')).toBeInTheDocument()
  })

  it('switches products when tab is clicked', async () => {
    const user = userEvent.setup()
    render(<NewProducts />)
    await user.click(screen.getByRole('button', { name: 'Smartphones' }))
    expect(screen.getByText('Galaxy S24')).toBeInTheDocument()
    expect(screen.getByText('$899')).toBeInTheDocument()
  })

  it('renders sale labels', () => {
    render(<NewProducts />)
    expect(screen.getByText('sale')).toBeInTheDocument()
  })

  it('renders new labels', async () => {
    const user = userEvent.setup()
    render(<NewProducts />)
    await user.click(screen.getByRole('button', { name: 'Smartphones' }))
    expect(screen.getByText('new')).toBeInTheDocument()
  })

  it('renders old price with strikethrough', () => {
    render(<NewProducts />)
    expect(screen.getByText('$1499')).toBeInTheDocument()
    const oldPrice = screen.getByText('$1499')
    expect(oldPrice.className).toContain('line-through')
  })

  it('renders add to cart buttons', () => {
    render(<NewProducts />)
    const buttons = screen.getAllByText('Add to Cart')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('renders product images', () => {
    render(<NewProducts />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
