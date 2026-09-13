import { render, screen } from '@testing-library/react'
import { Characteristics } from './Characteristics'

describe('Characteristics', () => {
  it('renders all four feature tiles', () => {
    render(<Characteristics />)
    expect(screen.getByText('Free Shipping')).toBeInTheDocument()
    expect(screen.getByText('Card Delivery')).toBeInTheDocument()
    expect(screen.getByText('Support 24/7')).toBeInTheDocument()
    expect(screen.getByText('Gift Voucher')).toBeInTheDocument()
  })

  it('renders feature subtitles', () => {
    render(<Characteristics />)
    expect(screen.getByText('On orders over $99')).toBeInTheDocument()
    expect(screen.getByText('Secure payment')).toBeInTheDocument()
    expect(screen.getByText('Instant access')).toBeInTheDocument()
    expect(screen.getByText('Send gift cards')).toBeInTheDocument()
  })
})
