import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MenProducts } from './MenProducts'

describe('MenProducts', () => {
  it('renders heading', () => {
    render(<MenProducts />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'New realeased Products for Men',
    )
  })

  it('renders 4 product cards with names and prices', () => {
    render(<MenProducts />)
    expect(screen.getAllByText('$150.00')).toHaveLength(4)
    expect(screen.getByText('Long Sleeve Shirt')).toBeInTheDocument()
    expect(screen.getByText('Chiffon Dress')).toBeInTheDocument()
    expect(screen.getByText('Summer Dress')).toBeInTheDocument()
    expect(screen.getByText('Casual Dress')).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<MenProducts />)
    expect(screen.getAllByRole('button')).toHaveLength(16)
  })
})
