import { render, screen } from '@testing-library/react'
import { ShipmentControl } from './ShipmentControl'

describe('ShipmentControl', () => {
  it('renders the section heading', () => {
    render(<ShipmentControl />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Complete Control/i)
  })

  it('renders three steps', () => {
    render(<ShipmentControl />)
    expect(screen.getByText('01.')).toBeInTheDocument()
    expect(screen.getByText('02.')).toBeInTheDocument()
    expect(screen.getByText('03.')).toBeInTheDocument()
  })

  it('renders step titles', () => {
    render(<ShipmentControl />)
    expect(screen.getByText('Find Your Route')).toBeInTheDocument()
    expect(screen.getByText('Track & Manage')).toBeInTheDocument()
    expect(screen.getByText('Deliver Safely')).toBeInTheDocument()
  })
})
