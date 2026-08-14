import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { latestColumns } from '../data'
import { LatestProducts } from './LatestProducts'

describe('LatestProducts', () => {
  it('renders the three column headers with six rows each', () => {
    render(<LatestProducts />)

    for (const column of latestColumns) {
      expect(screen.getByRole('heading', { name: column.header })).toBeInTheDocument()
      for (const item of column.items) {
        expect(screen.getByRole('link', { name: item.name })).toBeInTheDocument()
        expect(screen.getByText(item.price)).toBeInTheDocument()
      }
    }
  })

  it('renders exactly 18 product rows', () => {
    render(<LatestProducts />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(
      latestColumns.reduce((count, column) => count + column.items.length, 0),
    )
  })

  it('handles a click on a product title link without navigating', () => {
    render(<LatestProducts />)

    fireEvent.click(screen.getByRole('link', { name: latestColumns[0]!.items[0]!.name }))
  })
})
