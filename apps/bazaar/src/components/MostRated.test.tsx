import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MostRated } from './MostRated'

describe('MostRated', () => {
  it('shows the "Most Rated" heading', () => {
    render(<MostRated />)

    expect(screen.getByRole('heading', { level: 2, name: 'Most Rated' })).toBeInTheDocument()
  })

  it('renders at least four product tiles', () => {
    render(<MostRated />)

    for (const name of [
      'Smooth Cloth',
      'Blue Shoe High Heels',
      'Denim Jacket',
      'Leather Green Bag',
      'Yellow Jacket',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
