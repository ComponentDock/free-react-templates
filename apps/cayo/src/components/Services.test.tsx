import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Hotel Services')).toBeInTheDocument()
  })

  it('renders all 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('24/7 Front Desk')).toBeInTheDocument()
    expect(screen.getByText('Restaurant Bar')).toBeInTheDocument()
    expect(screen.getByText('Transfer Services')).toBeInTheDocument()
    expect(screen.getByText('Spa Suites')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/front desk is available/)).toBeInTheDocument()
    expect(screen.getByText(/local and international cuisine/)).toBeInTheDocument()
    expect(screen.getByText(/airport shuttle/)).toBeInTheDocument()
    expect(screen.getByText(/luxurious spa suites/)).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Services />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(4)
  })

  it('renders the Our Amenities subheading', () => {
    render(<Services />)
    expect(screen.getByText('Our Amenities')).toBeInTheDocument()
  })
})
