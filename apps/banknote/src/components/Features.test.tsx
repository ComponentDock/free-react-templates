import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Money Savings')).toBeInTheDocument()
    expect(screen.getByText('Online Shoppings')).toBeInTheDocument()
    expect(screen.getByText('Credit / Debit Cards')).toBeInTheDocument()
  })

  it('has a description for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/Secure and flexible savings/)).toBeInTheDocument()
    expect(screen.getByText(/Convenient online payment/)).toBeInTheDocument()
    expect(screen.getByText(/Wide range of cards/)).toBeInTheDocument()
  })
})
