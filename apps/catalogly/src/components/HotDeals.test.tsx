import { render, screen } from '@testing-library/react'
import { HotDeals } from './HotDeals'

describe('HotDeals', () => {
  it('renders two deal cards', () => {
    render(<HotDeals />)
    expect(screen.getAllByText('Hot Deals of this Month').length).toBe(2)
  })

  it('renders Shop Now buttons', () => {
    render(<HotDeals />)
    const buttons = screen.getAllByText('Shop Now')
    expect(buttons.length).toBeGreaterThanOrEqual(2)
  })

  it('renders deal images', () => {
    render(<HotDeals />)
    expect(screen.getByAltText('Hot deal on helmets')).toBeInTheDocument()
    expect(screen.getByAltText('Hot deal on accessories')).toBeInTheDocument()
  })
})
