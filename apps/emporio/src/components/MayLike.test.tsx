import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MayLike } from './MayLike'
import { mayLikeProducts } from '../data'

describe('MayLike', () => {
  it('renders the heading and four product cards with sale prices', () => {
    render(<MayLike />)
    expect(screen.getByRole('heading', { level: 2, name: 'You May Like' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
    for (const product of mayLikeProducts) {
      expect(screen.getByRole('heading', { level: 3, name: product.name })).toBeInTheDocument()
    }
    expect(screen.getAllByText('$98.00')).toHaveLength(4)
    expect(screen.getAllByText('$120.00')).toHaveLength(4)
  })
})
