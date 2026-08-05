import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders the client brand strip', () => {
    render(<Brands />)

    expect(screen.getByRole('region', { name: 'Client brands' })).toBeInTheDocument()
    for (const brand of ['Hexlab', 'Vantage', 'Northwind', 'Pixelcraft', 'Orbital', 'Summit Co']) {
      expect(screen.getByText(brand)).toBeInTheDocument()
    }
  })
})
