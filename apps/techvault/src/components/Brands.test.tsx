import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders all brand names', () => {
    render(<Brands />)
    expect(screen.getByText('Brand One')).toBeInTheDocument()
    expect(screen.getByText('Brand Two')).toBeInTheDocument()
    expect(screen.getByText('Brand Three')).toBeInTheDocument()
    expect(screen.getByText('Brand Eight')).toBeInTheDocument()
  })
})
