import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BestSellers } from '../components/BestSellers'

describe('BestSellers', () => {
  it('renders section heading', () => {
    render(<BestSellers />)
    expect(screen.getByText('Best Sellers')).toBeInTheDocument()
  })

  it('renders 4 product cards', () => {
    render(<BestSellers />)
    const images = screen.getAllByRole('img', { name: /Floral Jackquard Pullover/ })
    expect(images).toHaveLength(4)
  })

  it('renders product prices', () => {
    render(<BestSellers />)
    const prices = screen.getAllByText('$45.00')
    expect(prices).toHaveLength(4)
  })

  it('renders add-to-cart buttons', () => {
    render(<BestSellers />)
    const buttons = screen.getAllByRole('button', { name: /Add.*to cart/ })
    expect(buttons).toHaveLength(4)
  })
})
