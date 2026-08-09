import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PromoBar } from './PromoBar'

describe('PromoBar', () => {
  it('shows the free shipping offer and the discount code', () => {
    render(<PromoBar />)
    expect(screen.getByText('Free shipping on orders over $75')).toBeInTheDocument()
    expect(screen.getByText(/TREAD20/)).toBeInTheDocument()
    expect(screen.getByText(/20% off your first order/)).toBeInTheDocument()
  })
})
