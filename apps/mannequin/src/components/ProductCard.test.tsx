import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductCard } from './ProductCard'
import { products } from '../data'

describe('ProductCard', () => {
  const product = products[0]!

  it('renders name, price and image', () => {
    render(<ProductCard product={product} onAddToCart={vi.fn()} onQuickView={vi.fn()} />)
    expect(screen.getByRole('link', { name: product.name })).toBeInTheDocument()
    expect(screen.getByText(`$${product.price.toFixed(2)}`)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: product.name })).toHaveAttribute('src', product.image)
  })

  it('adds the product to the cart', async () => {
    const user = userEvent.setup()
    const onAddToCart = vi.fn()
    render(<ProductCard product={product} onAddToCart={onAddToCart} onQuickView={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: 'Add to cart' }))
    expect(onAddToCart).toHaveBeenCalledWith(product)
  })

  it('opens the quick view', async () => {
    const user = userEvent.setup()
    const onQuickView = vi.fn()
    render(<ProductCard product={product} onAddToCart={vi.fn()} onQuickView={onQuickView} />)

    await user.click(screen.getByRole('button', { name: `Quick view ${product.name}` }))
    expect(onQuickView).toHaveBeenCalledWith(product)
  })

  it('toggles the wishlist heart', async () => {
    const user = userEvent.setup()
    render(<ProductCard product={product} onAddToCart={vi.fn()} onQuickView={vi.fn()} />)

    const wishlist = screen.getByRole('button', { name: `Add ${product.name} to wishlist` })
    await user.click(wishlist)
    expect(
      screen.getByRole('button', { name: `Remove ${product.name} from wishlist` }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: `Remove ${product.name} from wishlist` }))
    expect(
      screen.getByRole('button', { name: `Add ${product.name} to wishlist` }),
    ).toBeInTheDocument()
  })
})
