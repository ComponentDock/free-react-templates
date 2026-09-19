import { render, screen } from '@testing-library/react'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('renders the section heading', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Recent Properties')).toBeInTheDocument()
  })

  it('renders all four property cards', () => {
    render(<FeaturedProperties />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })

  it('renders property addresses', () => {
    render(<FeaturedProperties />)
    const addresses = screen.getAllByText('North Parchmore Street')
    expect(addresses).toHaveLength(4)
  })

  it('renders sale and rent badges', () => {
    render(<FeaturedProperties />)
    expect(screen.getAllByText('Sale').length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText('Rent')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<FeaturedProperties />)
    expect(screen.getAllByText('$20,000').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$2,000/mo')).toBeInTheDocument()
  })

  it('renders bed, bath, and sqft details', () => {
    render(<FeaturedProperties />)
    expect(screen.getAllByText('3').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('4').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('250sqft').length).toBeGreaterThanOrEqual(1)
  })
})
