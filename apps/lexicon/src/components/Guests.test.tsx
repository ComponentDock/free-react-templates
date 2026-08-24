import { render, screen } from '@testing-library/react'
import { Guests } from './Guests'

describe('Guests', () => {
  it('renders heading', () => {
    render(<Guests />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('We Offer to Our Guest')
  })

  it('renders all three amenity cards', () => {
    render(<Guests />)
    expect(screen.getByText('Free Drinks')).toBeInTheDocument()
    expect(screen.getByText('Free Breakfast')).toBeInTheDocument()
    expect(screen.getByText('Free Dinner')).toBeInTheDocument()
  })

  it('renders amenity descriptions', () => {
    render(<Guests />)
    expect(screen.getByText('Complimentary welcome drinks upon arrival')).toBeInTheDocument()
    expect(screen.getByText('Daily buffet breakfast included')).toBeInTheDocument()
  })

  it('renders images', () => {
    render(<Guests />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
})
