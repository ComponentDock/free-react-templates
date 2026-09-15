import { render, screen } from '@testing-library/react'
import { PopularDestinations } from './PopularDestinations'

describe('PopularDestinations', () => {
  it('renders section heading', () => {
    render(<PopularDestinations />)
    expect(screen.getByText('Popular Destination')).toBeInTheDocument()
  })

  it('renders all 6 destination cards', () => {
    render(<PopularDestinations />)
    // Athens appears twice (title + city text) for the first card
    expect(screen.getAllByText('Athens, Greece').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Family Tour in Thailand')).toBeInTheDocument()
    expect(screen.getByText('Philippines Adventure')).toBeInTheDocument()
    expect(screen.getByText('Santorini Escape')).toBeInTheDocument()
    expect(screen.getByText('Bali Retreat')).toBeInTheDocument()
    expect(screen.getByText('Rome Discovery')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<PopularDestinations />)
    expect(screen.getByText('$450')).toBeInTheDocument()
    expect(screen.getByText('$520')).toBeInTheDocument()
  })

  it('has proper aria label', () => {
    render(<PopularDestinations />)
    expect(screen.getByLabelText('Popular destinations')).toBeInTheDocument()
  })
})
