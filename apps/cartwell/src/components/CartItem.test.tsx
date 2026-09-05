import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { CartItem } from './CartItem'
import type { CartItemData } from './CartItem'

const mockItem: CartItemData = {
  id: 1,
  name: 'Wireless Headphones',
  price: 49.99,
  quantity: 2,
  imageSeed: 'cartwell-1',
}

describe('CartItem', () => {
  it('renders the item name', () => {
    render(<CartItem item={mockItem} onQuantityChange={vi.fn()} onRemove={vi.fn()} />)
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument()
  })

  it('renders the unit price', () => {
    render(<CartItem item={mockItem} onQuantityChange={vi.fn()} onRemove={vi.fn()} />)
    expect(screen.getByText('$49.99')).toBeInTheDocument()
  })

  it('renders the quantity', () => {
    render(<CartItem item={mockItem} onQuantityChange={vi.fn()} onRemove={vi.fn()} />)
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('renders the subtotal', () => {
    render(<CartItem item={mockItem} onQuantityChange={vi.fn()} onRemove={vi.fn()} />)
    expect(screen.getByText('$99.98')).toBeInTheDocument()
  })

  it('renders the product image with alt text', () => {
    render(<CartItem item={mockItem} onQuantityChange={vi.fn()} onRemove={vi.fn()} />)
    const img = screen.getByAltText('Wireless Headphones')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/cartwell-1/120/120')
  })

  it('calls onQuantityChange with +1 when increase button clicked', async () => {
    const onQuantityChange = vi.fn()
    const user = userEvent.setup()
    render(<CartItem item={mockItem} onQuantityChange={onQuantityChange} onRemove={vi.fn()} />)
    await user.click(
      screen.getByRole('button', { name: 'Increase quantity of Wireless Headphones' }),
    )
    expect(onQuantityChange).toHaveBeenCalledWith(1, 1)
  })

  it('calls onQuantityChange with -1 when decrease button clicked', async () => {
    const onQuantityChange = vi.fn()
    const user = userEvent.setup()
    render(<CartItem item={mockItem} onQuantityChange={onQuantityChange} onRemove={vi.fn()} />)
    await user.click(
      screen.getByRole('button', { name: 'Decrease quantity of Wireless Headphones' }),
    )
    expect(onQuantityChange).toHaveBeenCalledWith(1, -1)
  })

  it('calls onRemove when remove button clicked', async () => {
    const onRemove = vi.fn()
    const user = userEvent.setup()
    render(<CartItem item={mockItem} onQuantityChange={vi.fn()} onRemove={onRemove} />)
    await user.click(screen.getByRole('button', { name: 'Remove Wireless Headphones from cart' }))
    expect(onRemove).toHaveBeenCalledWith(1)
  })

  it('has role="menuitem"', () => {
    render(<CartItem item={mockItem} onQuantityChange={vi.fn()} onRemove={vi.fn()} />)
    expect(screen.getByRole('menuitem')).toBeInTheDocument()
  })
})
