import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BRANDS } from '../data'
import { BrandStrip } from './BrandStrip'

describe('BrandStrip', () => {
  it('renders six varied brand marks', () => {
    render(<BrandStrip />)
    expect(BRANDS).toHaveLength(6)
    for (const brand of BRANDS) {
      expect(screen.getByText(brand.name)).toBeInTheDocument()
    }
  })
})
