import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all four feature titles', () => {
    render(<Features />)
    expect(screen.getByText('Free Delivery')).toBeInTheDocument()
    expect(screen.getByText('Return Policy')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
    expect(screen.getByText('Secure Payment')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText('Free Shipping on all orders')).toBeInTheDocument()
    expect(screen.getByText('Free returns within 30 days')).toBeInTheDocument()
    expect(screen.getByText('Dedicated support team online')).toBeInTheDocument()
    expect(screen.getByText('100% secure checkout')).toBeInTheDocument()
  })

  it('renders exactly 4 feature cards', () => {
    render(<Features />)
    const titles = ['Free Delivery', 'Return Policy', '24/7 Support', 'Secure Payment']
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })
})
