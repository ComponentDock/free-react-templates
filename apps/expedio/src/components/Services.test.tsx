import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Popular Services')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Services />)
    expect(screen.getByText(/Fowl have fruit moveth male/)).toBeInTheDocument()
  })

  it('renders all 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Hotel Booking')).toBeInTheDocument()
    expect(screen.getByText('Flight Booking')).toBeInTheDocument()
    expect(screen.getByText('Destination Booking')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/Great so dominion two seed give dry rule/)
    expect(descriptions).toHaveLength(3)
  })
})
