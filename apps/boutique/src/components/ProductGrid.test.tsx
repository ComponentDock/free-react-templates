import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  addToCartLabel,
  productFilters,
  products,
  quickViewLabel,
  saveLabel,
  seeMoreLabel,
} from '../data'
import { ProductGrid } from './ProductGrid'

describe('ProductGrid', () => {
  it('renders the filter tabs with Recommended active and all products', () => {
    render(<ProductGrid />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(productFilters.length)
    expect(tabs[0]).toHaveTextContent('Recommended')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByRole('listitem')).toHaveLength(products.length + productFilters.length)
  })

  it('filters products by category when a tab is activated', async () => {
    const user = userEvent.setup()
    render(<ProductGrid />)
    await user.click(screen.getByRole('tab', { name: 'New arrivals' }))
    const names = screen.getAllByRole('listitem').map((item) => item.textContent)
    expect(names.some((text) => text?.includes('Hype grey shirt'))).toBe(true)
    expect(names.some((text) => text?.includes('Long red Shirt'))).toBe(false)
    expect(names.some((text) => text?.includes('long sleeve jacket'))).toBe(false)
    expect(names).toHaveLength(
      products.filter((product) => product.categories.includes('new')).length +
        productFilters.length,
    )
  })

  it('shows badges, prices, quick view/save bar, and ADD TO CART on cards', () => {
    render(<ProductGrid />)
    expect(screen.getAllByText('NEW').length).toBeGreaterThan(0)
    expect(screen.getAllByText('SALE').length).toBeGreaterThan(0)
    expect(screen.getAllByText(quickViewLabel).length).toBeGreaterThan(0)
    expect(screen.getAllByText(saveLabel).length).toBeGreaterThan(0)
    expect(screen.getAllByText(addToCartLabel).length).toBeGreaterThan(0)
    expect(screen.getAllByText('RRP $64.40').length).toBeGreaterThan(0)
    expect(screen.getAllByText('$39.90').length).toBeGreaterThan(0)
  })

  it('renders the SEE MORE button below the grid', () => {
    render(<ProductGrid />)
    expect(screen.getByRole('link', { name: seeMoreLabel })).toBeInTheDocument()
  })
})
