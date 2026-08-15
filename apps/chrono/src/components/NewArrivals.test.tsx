import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { arrivalsProducts, arrivalsTitle } from '../data'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the section title and three product cards', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('heading', { name: arrivalsTitle })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(arrivalsProducts.length)

    for (const product of arrivalsProducts) {
      expect(screen.getByRole('heading', { name: product.name })).toBeInTheDocument()
      expect(screen.getByText(product.price)).toBeInTheDocument()
    }
  })

  it('renders product images with alt text', () => {
    const { container } = render(<NewArrivals />)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(arrivalsProducts.length)
    expect(images[0]).toHaveAttribute('alt', arrivalsProducts[0].name)
  })
})
