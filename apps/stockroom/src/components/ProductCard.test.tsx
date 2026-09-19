import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  it('renders product name and price', () => {
    render(
      <ProductCard
        name="Modern Chair"
        price="From $180"
        image="https://picsum.photos/seed/test/600/600"
      />,
    )
    expect(screen.getByText('Modern Chair')).toBeInTheDocument()
    expect(screen.getByText('From $180')).toBeInTheDocument()
  })

  it('renders image with alt text', () => {
    render(
      <ProductCard
        name="Plant Pot"
        price="From $18"
        image="https://picsum.photos/seed/pot/600/600"
      />,
    )
    const img = screen.getByAltText('Plant Pot')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/pot/600/600')
  })

  it('links to shop', () => {
    render(
      <ProductCard
        name="Table"
        price="From $320"
        image="https://picsum.photos/seed/table/600/600"
      />,
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#shop')
  })
})
