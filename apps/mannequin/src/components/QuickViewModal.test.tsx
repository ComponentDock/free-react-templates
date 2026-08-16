import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuickViewModal } from './QuickViewModal'
import { products, sizes } from '../data'

describe('QuickViewModal', () => {
  const product = products[0]!

  it('renders product details, size select and add-to-cart', () => {
    render(<QuickViewModal product={product} onAddToCart={vi.fn()} onClose={vi.fn()} />)
    expect(screen.getByRole('dialog', { name: `Quick view ${product.name}` })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: product.name })).toHaveAttribute('src', product.image)
    expect(screen.getByText(`$${product.price.toFixed(2)}`)).toBeInTheDocument()
    expect(screen.getByText(product.description)).toBeInTheDocument()
    expect(screen.getByLabelText('Size')).toBeInTheDocument()
    for (const size of sizes) {
      expect(screen.getByRole('option', { name: size })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Add to cart' })).toBeInTheDocument()
  })

  it('adds the product to the cart with a selected size', async () => {
    const user = userEvent.setup()
    const onAddToCart = vi.fn()
    render(<QuickViewModal product={product} onAddToCart={onAddToCart} onClose={vi.fn()} />)

    await user.selectOptions(screen.getByLabelText('Size'), 'XL')
    expect(screen.getByLabelText('Size')).toHaveValue('XL')

    await user.click(screen.getByRole('button', { name: 'Add to cart' }))
    expect(onAddToCart).toHaveBeenCalledWith(product)
  })

  it('closes on Escape, overlay click and the close button', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<QuickViewModal product={product} onAddToCart={vi.fn()} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)

    await user.click(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(2)

    await user.click(screen.getByRole('button', { name: 'Close quick view' }))
    expect(onClose).toHaveBeenCalledTimes(3)
  })

  it('ignores non-Escape keys', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<QuickViewModal product={product} onAddToCart={vi.fn()} onClose={onClose} />)

    await user.keyboard('{Enter}')
    expect(onClose).not.toHaveBeenCalled()
  })
})
