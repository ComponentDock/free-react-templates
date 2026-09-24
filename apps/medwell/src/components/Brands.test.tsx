import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders brand names', () => {
    render(<Brands />)
    expect(screen.getByText('BrandOne')).toBeInTheDocument()
    expect(screen.getByText('BrandTwo')).toBeInTheDocument()
    expect(screen.getByText('BrandThree')).toBeInTheDocument()
    expect(screen.getByText('BrandFour')).toBeInTheDocument()
    expect(screen.getByText('BrandFive')).toBeInTheDocument()
  })

  it('renders five brand items', () => {
    const { container } = render(<Brands />)
    const items = container.querySelectorAll('.opacity-40')
    expect(items).toHaveLength(5)
  })
})
