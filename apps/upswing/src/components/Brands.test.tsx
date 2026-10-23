import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders at least four client logo tiles', () => {
    render(<Brands />)

    for (const brand of ['Hexlab', 'Vantage', 'Northwind', 'Pixelcraft', 'Orbital']) {
      expect(screen.getByText(brand)).toBeInTheDocument()
    }
  })
})
