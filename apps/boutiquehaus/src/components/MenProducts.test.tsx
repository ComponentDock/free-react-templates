import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MenProducts } from './MenProducts'

describe('MenProducts', () => {
  it('renders heading and product cards', () => {
    render(<MenProducts />)
    expect(
      screen.getByRole('heading', { name: /New released Products for Men/i }),
    ).toBeInTheDocument()
    const prices = screen.getAllByText('$150.00')
    expect(prices).toHaveLength(4)
  })

  it('renders product images', () => {
    render(<MenProducts />)
    const images = screen.getAllByRole('img', { name: /Long Sleeve Shirt/i })
    expect(images).toHaveLength(4)
  })

  it('has action buttons for each product', () => {
    render(<MenProducts />)
    const wishButtons = screen.getAllByRole('button', { name: /Add to wishlist/i })
    expect(wishButtons).toHaveLength(4)
  })
})
