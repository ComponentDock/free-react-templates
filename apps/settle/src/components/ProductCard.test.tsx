import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'
import { ADD_TO_CART } from '../data'

const PRODUCT = { seed: 'settle-p1', name: 'Quartz Belt Watch', price: '$150.00' }

describe('ProductCard', () => {
  it('renders the image, name, price and add-to-cart action', () => {
    const { container } = render(<ProductCard product={PRODUCT} />)

    const image = container.querySelector('img')!
    expect(image).toHaveAttribute('src', `https://picsum.photos/seed/${PRODUCT.seed}/400/400`)
    expect(image).toHaveAttribute('alt', PRODUCT.name)

    expect(screen.getByRole('link', { name: PRODUCT.name })).toHaveAttribute('href', '#shop')
    expect(screen.getByRole('heading', { level: 3, name: PRODUCT.name })).toBeInTheDocument()
    expect(screen.getByText(PRODUCT.price)).toBeInTheDocument()

    const addToCart = screen.getByRole('button', { name: ADD_TO_CART })
    expect(addToCart.className).toContain('hover:bg-brand')
  })
})
