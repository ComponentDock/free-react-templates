import { render, screen } from '@testing-library/react'
import { Products } from './Products'

describe('Products', () => {
  it('renders the products heading', () => {
    render(<Products />)
    expect(screen.getByText('Unique Features')).toBeInTheDocument()
  })

  it('renders all 4 product cards with names and prices', () => {
    render(<Products />)
    expect(screen.getByText('Wristly Classic')).toBeInTheDocument()
    expect(screen.getByText('Wristly Sport')).toBeInTheDocument()
    expect(screen.getByText('Wristly Elite')).toBeInTheDocument()
    expect(screen.getByText('Wristly Ultra')).toBeInTheDocument()
    const prices = screen.getAllByText('£399.00')
    expect(prices).toHaveLength(4)
  })

  it('renders Pre Order buttons', () => {
    render(<Products />)
    const buttons = screen.getAllByRole('button', { name: /pre order/i })
    expect(buttons).toHaveLength(4)
  })
})
