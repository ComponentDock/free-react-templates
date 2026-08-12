import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('shows the placeholder brand logo strip', () => {
    render(<Brands />)

    for (const brand of ['Northgate', 'Meridian', 'Carewell', 'Vantage', 'Apexline', 'Bluepeak']) {
      expect(screen.getByText(brand)).toBeInTheDocument()
    }
  })
})
