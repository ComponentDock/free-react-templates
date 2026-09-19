import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Online Support 24/7')).toBeInTheDocument()
    expect(screen.getByText('Money Back Guarantee')).toBeInTheDocument()
    expect(screen.getByText('Free Shipping & Return')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/always available to help/)).toBeInTheDocument()
    expect(screen.getByText(/full refund/)).toBeInTheDocument()
    expect(screen.getByText(/complimentary shipping/)).toBeInTheDocument()
  })
})
