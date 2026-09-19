import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WomenProducts } from './WomenProducts'

describe('WomenProducts', () => {
  it('renders heading', () => {
    render(<WomenProducts />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'New realeased Products for Women',
    )
  })

  it('renders 4 product cards with names and prices', () => {
    render(<WomenProducts />)
    expect(screen.getAllByText('$150.00')).toHaveLength(4)
    expect(screen.getByText('Long Sleeve Shirt')).toBeInTheDocument()
    expect(screen.getByText('Chiffon Dress')).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<WomenProducts />)
    expect(screen.getAllByRole('button')).toHaveLength(16)
  })
})
