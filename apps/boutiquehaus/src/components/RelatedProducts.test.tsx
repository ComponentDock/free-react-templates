import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RelatedProducts } from './RelatedProducts'

describe('RelatedProducts', () => {
  it('renders heading and product items', () => {
    render(<RelatedProducts />)
    expect(screen.getByRole('heading', { name: /Related Searched Products/i })).toBeInTheDocument()
    const prices = screen.getAllByText('$189.00')
    expect(prices).toHaveLength(12)
  })

  it('renders product images', () => {
    render(<RelatedProducts />)
    const images = screen.getAllByRole('img', { name: /Black Lace Heels/i })
    expect(images).toHaveLength(12)
  })
})
