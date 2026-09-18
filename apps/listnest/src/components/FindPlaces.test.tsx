import { render, screen } from '@testing-library/react'
import { FindPlaces } from './FindPlaces'

describe('FindPlaces', () => {
  it('renders the heading', () => {
    render(<FindPlaces />)
    expect(screen.getByText('What do you need to find?')).toBeInTheDocument()
  })

  it('renders all place categories', () => {
    render(<FindPlaces />)
    expect(screen.getByText('Nightlife')).toBeInTheDocument()
    expect(screen.getByText('Restaurants')).toBeInTheDocument()
    expect(screen.getByText('Outdoors')).toBeInTheDocument()
    expect(screen.getByText('Hotels')).toBeInTheDocument()
    expect(screen.getByText('Shopping')).toBeInTheDocument()
  })

  it('renders listing counts', () => {
    render(<FindPlaces />)
    expect(screen.getByText('385 Listings')).toBeInTheDocument()
    expect(screen.getByText('210 Listings')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<FindPlaces className="custom-find" />)
    expect(container.firstChild).toHaveClass('custom-find')
  })
})
