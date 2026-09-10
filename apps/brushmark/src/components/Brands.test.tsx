import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders all brand names', () => {
    render(<Brands />)
    const brands = [
      'Brand Alpha',
      'Company Beta',
      'Studio Gamma',
      'Agency Delta',
      'Group Epsilon',
      'Corp Zeta',
    ]
    for (const brand of brands) {
      expect(screen.getByText(brand)).toBeInTheDocument()
    }
  })
})
