import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TrustBar } from './TrustBar'

describe('TrustBar', () => {
  it('renders four trust features with titles and descriptions', () => {
    render(<TrustBar />)
    for (const title of ['Free Shipping', 'Secure Payment', 'Easy Returns', '24/7 Support']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    expect(screen.getByText(/on all orders over \$100/i)).toBeInTheDocument()
    expect(screen.getByText(/processed securely with SSL/i)).toBeInTheDocument()
    expect(screen.getByText(/30-day return policy/i)).toBeInTheDocument()
    expect(screen.getByText(/around the clock/i)).toBeInTheDocument()
  })
})
