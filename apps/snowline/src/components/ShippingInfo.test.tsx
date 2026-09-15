import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShippingInfo } from './ShippingInfo'

describe('ShippingInfo', () => {
  it('renders all four feature cards', () => {
    render(<ShippingInfo />)
    expect(screen.getByText('Free Shipping')).toBeInTheDocument()
    expect(screen.getByText('Weekly Discount')).toBeInTheDocument()
    expect(screen.getByText('Premium Quality')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
  })

  it('renders descriptions for each feature', () => {
    render(<ShippingInfo />)
    const descriptions = screen.getAllByText(/Divided face for bearing/)
    expect(descriptions.length).toBe(4)
  })
})
