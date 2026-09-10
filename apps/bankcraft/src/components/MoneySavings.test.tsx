import { render, screen } from '@testing-library/react'
import { MoneySavings } from './MoneySavings'

describe('MoneySavings', () => {
  it('renders section heading', () => {
    render(<MoneySavings />)
    expect(screen.getAllByText('Money Savings').length).toBeGreaterThanOrEqual(1)
  })

  it('renders 4 feature cards', () => {
    render(<MoneySavings />)
    expect(screen.getAllByText('Money Savings').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Online Shoppings')).toBeInTheDocument()
    expect(screen.getByText('Credit / Debit Cards')).toBeInTheDocument()
    expect(screen.getByText('Amortization Computation')).toBeInTheDocument()
  })
})
