import { render, screen } from '@testing-library/react'
import { LatestProducts } from './LatestProducts'

describe('LatestProducts', () => {
  it('renders with Latest Products title', () => {
    render(<LatestProducts />)
    expect(screen.getByText('Latest Products')).toBeInTheDocument()
  })

  it('renders product cards', () => {
    render(<LatestProducts />)
    expect(screen.getByText('Georgia Helmet Pro')).toBeInTheDocument()
  })
})
