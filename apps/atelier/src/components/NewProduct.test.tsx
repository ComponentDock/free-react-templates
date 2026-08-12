import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewProduct } from './NewProduct'

describe('NewProduct', () => {
  it('renders the NEW PRODUCT heading with eight cards and all badge variants', () => {
    render(<NewProduct />)

    expect(screen.getByRole('heading', { level: 2, name: 'New Product' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(8)
    expect(screen.getAllByRole('img')).toHaveLength(8)

    expect(screen.getByText('NEW')).toBeInTheDocument()
    expect(screen.getByText('SALE')).toBeInTheDocument()
    expect(screen.getByText('OUT OF STOCK')).toBeInTheDocument()
  })
})
