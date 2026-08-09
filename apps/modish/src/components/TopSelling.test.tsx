import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TopSelling } from './TopSelling'

describe('TopSelling', () => {
  it('renders the heading, the eight filter pills and the first eight products', () => {
    render(<TopSelling />)
    expect(
      screen.getByRole('heading', { name: /browse top selling products/i }),
    ).toBeInTheDocument()

    for (const pill of [
      'TOPS',
      'JUMPSUITS',
      'LINGERIE',
      'JEANS',
      'DRESSES',
      'COATS',
      'JUMPERS',
      'LEGGINGS',
    ]) {
      expect(screen.getByRole('button', { name: pill })).toBeInTheDocument()
    }

    expect(screen.getByText('Cotton Poplin Top')).toBeInTheDocument()
    expect(screen.getByText('Wool Blend Coat')).toBeInTheDocument()
    expect(screen.queryByText('Knit Jumper')).not.toBeInTheDocument()
    expect(screen.queryByText('Ribbed Leggings')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Load More' })).toBeInTheDocument()
  })

  it('reveals the remaining products with load more and hides the button afterwards', () => {
    render(<TopSelling />)
    fireEvent.click(screen.getByRole('button', { name: 'Load More' }))
    expect(screen.getByText('Knit Jumper')).toBeInTheDocument()
    expect(screen.getByText('Ribbed Leggings')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Load More' })).not.toBeInTheDocument()
  })

  it('filters the grid by category and highlights the active pill', () => {
    render(<TopSelling />)
    const dresses = screen.getByRole('button', { name: 'DRESSES' })
    expect(dresses).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(dresses)
    expect(screen.getByRole('button', { name: 'DRESSES' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('Floral Maxi Dress')).toBeInTheDocument()
    expect(screen.getByText('Denim Pinafore Dress')).toBeInTheDocument()
    expect(screen.queryByText('Cotton Poplin Top')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Load More' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'TOPS' }))
    expect(screen.getByText('Cotton Poplin Top')).toBeInTheDocument()
    expect(screen.getByText('Satin Blouse')).toBeInTheDocument()
    expect(screen.queryByText('Floral Maxi Dress')).not.toBeInTheDocument()
  })

  it('renders the New and ON SALE tags for tagged products', () => {
    render(<TopSelling />)
    expect(screen.getAllByText('New')).toHaveLength(1)
    expect(screen.getAllByText('ON SALE')).toHaveLength(1)
  })
})
