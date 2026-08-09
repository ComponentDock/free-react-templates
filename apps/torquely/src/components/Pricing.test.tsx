import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and four plans with prices and buttons', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /^Pricing$/i })).toBeInTheDocument()
    for (const plan of ['First PMS', 'Engine Diagnostics', 'Tow Truck', 'Car Wash']) {
      expect(screen.getByRole('heading', { name: plan })).toBeInTheDocument()
    }
    for (const price of ['78.98', '83.75', '85.00', '30.50']) {
      expect(screen.getByText(price)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('button', { name: /Get Started/i })).toHaveLength(4)
  })
})
