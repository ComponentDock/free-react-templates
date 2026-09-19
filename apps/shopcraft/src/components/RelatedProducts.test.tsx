import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RelatedProducts } from './RelatedProducts'

describe('RelatedProducts', () => {
  it('renders heading', () => {
    render(<RelatedProducts />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Related Searched Products')
  })

  it('renders all product items', () => {
    render(<RelatedProducts />)
    expect(screen.getByText('Black lace Heels')).toBeInTheDocument()
    expect(screen.getAllByText('$189.00')).toHaveLength(8)
  })
})
