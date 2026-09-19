import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Products } from './Products'

describe('Products', () => {
  it('renders filter tabs', () => {
    render(<Products />)
    expect(screen.getByRole('tab', { name: 'Best Sellers' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'New Arrivals' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Hot Sales' })).toBeInTheDocument()
  })

  it('shows all products for Best Sellers filter', () => {
    render(<Products />)
    expect(screen.getAllByText(/Add To Cart/)).toHaveLength(8)
  })

  it('filters to New Arrivals when tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Products />)
    await user.click(screen.getByRole('tab', { name: 'New Arrivals' }))
    expect(screen.getAllByText(/Add To Cart/)).toHaveLength(4)
  })

  it('filters to Hot Sales when tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Products />)
    await user.click(screen.getByRole('tab', { name: 'Hot Sales' }))
    expect(screen.getAllByText(/Add To Cart/)).toHaveLength(4)
  })

  it('displays product names and prices', () => {
    render(<Products />)
    expect(screen.getAllByText('Piqué Biker Jacket').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('$67.24').length).toBeGreaterThanOrEqual(1)
  })

  it('renders product images with alt text', () => {
    render(<Products />)
    expect(screen.getAllByAltText('Piqué Biker Jacket').length).toBeGreaterThanOrEqual(1)
  })

  it('renders wishlist, compare, and quick view buttons', () => {
    render(<Products />)
    expect(screen.getAllByLabelText('Add to wishlist').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Compare').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Quick view').length).toBeGreaterThanOrEqual(1)
  })
})
