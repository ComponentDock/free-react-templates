import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Explore Our Hotel Services',
    )
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Free Wifi')).toBeInTheDocument()
    expect(screen.getByText('Easy Booking')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Swimming Pool')).toBeInTheDocument()
    expect(screen.getByText('Beauty & Health')).toBeInTheDocument()
    expect(screen.getByText('Help & Support')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Stay connected with complimentary/)).toBeInTheDocument()
  })
})
