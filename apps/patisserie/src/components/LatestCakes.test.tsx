import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { LatestCakes } from './LatestCakes'
import { products } from '../data'

describe('LatestCakes', () => {
  it('shows the first window of product cards with photo, name and gold price', () => {
    render(<LatestCakes />)
    for (const product of products.slice(0, 3)) {
      expect(screen.getByRole('heading', { name: product.name })).toBeInTheDocument()
      expect(screen.getAllByText(product.price)).toHaveLength(3)
      expect(screen.getAllByAltText(product.imageAlt)).toHaveLength(1)
    }
    expect(screen.queryByRole('heading', { name: products[3]!.name })).not.toBeInTheDocument()
  })

  it('reveals the gold Add to cart bar on each product photo', () => {
    render(<LatestCakes />)
    expect(screen.getAllByText('Add to cart')).toHaveLength(3)
    const bars = screen.getAllByText('Add to cart').map((node) => node.parentElement)
    for (const bar of bars) {
      expect(bar?.className).toContain('bg-brand')
    }
  })

  it('moves the window forward and wraps around with the next arrow', async () => {
    const user = userEvent.setup()
    render(<LatestCakes />)
    await user.click(screen.getByRole('button', { name: 'Next cakes' }))
    expect(screen.getByRole('heading', { name: products[3]!.name })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: products[0]!.name })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next cakes' }))
    expect(screen.getByRole('heading', { name: products[0]!.name })).toBeInTheDocument()
  })

  it('moves the window backward with the previous arrow', async () => {
    const user = userEvent.setup()
    render(<LatestCakes />)
    await user.click(screen.getByRole('button', { name: 'Previous cakes' }))
    expect(screen.getByRole('heading', { name: products[3]!.name })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous cakes' }))
    expect(screen.getByRole('heading', { name: products[0]!.name })).toBeInTheDocument()
  })
})
