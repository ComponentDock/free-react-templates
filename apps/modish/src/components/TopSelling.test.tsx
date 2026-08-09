import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TopSelling } from './TopSelling'

describe('TopSelling', () => {
  it('renders the heading, filter tabs and the first six products with a load-more button', () => {
    render(<TopSelling />)
    expect(
      screen.getByRole('heading', { name: /browse top selling products/i }),
    ).toBeInTheDocument()

    for (const tab of [
      'TOPS',
      'JUMPSUITS',
      'LINGERIE',
      'JEANS',
      'DRESSES',
      'COATS',
      'JUMPERS',
      'LEGGINGS',
      'ON SALE',
    ]) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }

    expect(screen.getByText('Cotton Poplin Top')).toBeInTheDocument()
    expect(screen.queryByText('Ribbed Leggings')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Load More' })).toBeInTheDocument()
  })

  it('reveals the remaining products with load more and hides the button afterwards', () => {
    render(<TopSelling />)
    fireEvent.click(screen.getByRole('button', { name: 'Load More' }))
    expect(screen.getByText('Ribbed Leggings')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Load More' })).not.toBeInTheDocument()
  })

  it('filters the grid by category and by sale items', () => {
    render(<TopSelling />)
    fireEvent.click(screen.getByRole('button', { name: 'DRESSES' }))
    expect(screen.getByText('Floral Maxi Dress')).toBeInTheDocument()
    expect(screen.getByText('Denim Pinafore Dress')).toBeInTheDocument()
    expect(screen.queryByText('Cotton Poplin Top')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Load More' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'ON SALE' }))
    expect(screen.getByText('Cotton Poplin Top')).toBeInTheDocument()
    expect(screen.getByText('Floral Maxi Dress')).toBeInTheDocument()
    expect(screen.queryByText('Denim Pinafore Dress')).not.toBeInTheDocument()
  })

  it('marks the active tab and resets the visible count on tab change', () => {
    render(<TopSelling />)
    const tops = screen.getByRole('button', { name: 'TOPS' })
    expect(tops).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(tops)
    expect(screen.getByRole('button', { name: 'TOPS' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('Cotton Poplin Top')).toBeInTheDocument()
    expect(screen.getByText('Satin Blouse')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Load More' })).not.toBeInTheDocument()
  })

  it('renders the on-sale badge for sale products', () => {
    render(<TopSelling />)
    expect(screen.getAllByText('On Sale')).toHaveLength(2)
  })
})
