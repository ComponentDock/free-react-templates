import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandsStrip } from './BrandsStrip'

describe('BrandsStrip', () => {
  it('shows the brand name placeholders', () => {
    render(<BrandsStrip />)

    for (const brand of ['Mango', 'Topshop', 'Zara', 'H&M', 'Gucci', 'Prada']) {
      expect(screen.getByText(brand)).toBeInTheDocument()
    }
  })
})
