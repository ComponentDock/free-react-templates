import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TrendingProducts } from './TrendingProducts'
import { products } from '../data'

describe('TrendingProducts', () => {
  it('renders the heading, tabs and the first page of products', () => {
    render(<TrendingProducts />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Trending This Week' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Men' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Women' })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByRole('tab', { name: 'Baby' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Fashion' })).toBeInTheDocument()
    expect(screen.getByRole('tabpanel', { name: 'Men products' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
    expect(screen.getByRole('heading', { level: 3, name: products[0]!.name })).toBeInTheDocument()
  })

  it('switches panes via tabs and paginates with arrows and dots', () => {
    render(<TrendingProducts />)
    fireEvent.click(screen.getByRole('tab', { name: 'Women' }))
    expect(screen.getByRole('tab', { name: 'Women' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'Women products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: products[0]!.name })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next products' }))
    expect(screen.getByRole('heading', { level: 3, name: products[4]!.name })).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 3, name: products[0]!.name }),
    ).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous products' }))
    expect(screen.getByRole('heading', { level: 3, name: products[0]!.name })).toBeInTheDocument()

    // Previous at the first page wraps to the last page (12 products / 3 pages)
    fireEvent.click(screen.getByRole('button', { name: 'Previous products' }))
    expect(screen.getByRole('heading', { level: 3, name: products[8]!.name })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Go to page 2' }))
    expect(screen.getByRole('heading', { level: 3, name: products[4]!.name })).toBeInTheDocument()
  })

  it('switching tabs resets the carousel to the first page', () => {
    render(<TrendingProducts />)
    fireEvent.click(screen.getByRole('button', { name: 'Next products' }))
    fireEvent.click(screen.getByRole('tab', { name: 'Baby' }))
    expect(screen.getByRole('tabpanel', { name: 'Baby products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: products[0]!.name })).toBeInTheDocument()
  })
})
