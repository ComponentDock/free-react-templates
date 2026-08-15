import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LatestProducts } from './LatestProducts'
import { products } from '../data'

describe('LatestProducts', () => {
  it('renders the heading, five filter tabs and eight product cards', () => {
    render(<LatestProducts />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Products' })).toBeInTheDocument()
    for (const tab of ['All', 'Dresses', 'Bags', 'Shoes', 'Accesories']) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('article')).toHaveLength(8)
    expect(screen.getAllByText('Green Dress with details')).toHaveLength(2)
    expect(screen.getAllByText('$22.90')).toHaveLength(2)
    expect(screen.getAllByText('new')).toHaveLength(4)
    expect(screen.getAllByText('sale')).toHaveLength(2)
    expect(screen.getAllByText('popular')).toHaveLength(2)
  })

  it('filters the grid by category and back to All', () => {
    render(<LatestProducts />)
    fireEvent.click(screen.getByRole('button', { name: 'Dresses' }))
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Dresses' })).toHaveAttribute('aria-pressed', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Bags' }))
    expect(screen.getAllByRole('article')).toHaveLength(2)

    fireEvent.click(screen.getByRole('button', { name: 'Shoes' }))
    expect(screen.getAllByRole('article')).toHaveLength(1)

    fireEvent.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('article')).toHaveLength(products.length)
  })
})
