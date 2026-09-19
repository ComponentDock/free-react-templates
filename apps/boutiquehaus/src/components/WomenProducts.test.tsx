import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WomenProducts } from './WomenProducts'

describe('WomenProducts', () => {
  it('renders heading and product cards', () => {
    render(<WomenProducts />)
    expect(
      screen.getByRole('heading', { name: /New released Products for Women/i }),
    ).toBeInTheDocument()
    const prices = screen.getAllByText('$150.00')
    expect(prices).toHaveLength(4)
  })

  it('renders product images', () => {
    render(<WomenProducts />)
    const images = screen.getAllByRole('img', { name: /Long Sleeve Shirt/i })
    expect(images).toHaveLength(4)
  })
})
