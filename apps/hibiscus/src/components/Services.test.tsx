import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Hotel Services')).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Free Wi-Fi')).toBeInTheDocument()
    expect(screen.getByText('Premium Pool')).toBeInTheDocument()
    expect(screen.getByText('Coffee Maker')).toBeInTheDocument()
    expect(screen.getByText('Bar Wine')).toBeInTheDocument()
    expect(screen.getByText('TV HD')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/high-speed internet/)).toBeInTheDocument()
    expect(screen.getByText(/infinity pool/)).toBeInTheDocument()
    expect(screen.getByText(/artisanal coffee/)).toBeInTheDocument()
    expect(screen.getByText(/fine wines/)).toBeInTheDocument()
    expect(screen.getByText(/streaming services/)).toBeInTheDocument()
    expect(screen.getByText(/award-winning chefs/)).toBeInTheDocument()
  })

  it('renders the Our Services subheading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })
})
