import { render, screen } from '@testing-library/react'
import { PopularCategories } from './PopularCategories'

describe('PopularCategories', () => {
  it('renders the section title', () => {
    render(<PopularCategories />)
    expect(screen.getByText('Popular Categories')).toBeInTheDocument()
  })

  it('renders all category names', () => {
    render(<PopularCategories />)
    expect(screen.getByText('Computers')).toBeInTheDocument()
    expect(screen.getByText('Laptops')).toBeInTheDocument()
    expect(screen.getByText('Cameras')).toBeInTheDocument()
    expect(screen.getByText('Smartphones')).toBeInTheDocument()
  })
})
