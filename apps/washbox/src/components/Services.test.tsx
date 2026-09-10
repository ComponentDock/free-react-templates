import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Why take our services?')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Services />)
    expect(screen.getByText(/cutting-edge technology/)).toBeInTheDocument()
  })

  it('renders four service items', () => {
    render(<Services />)
    expect(screen.getByText('Car wash 100% without detergents')).toBeInTheDocument()
    expect(screen.getByText('Efficient surface drying machines')).toBeInTheDocument()
    expect(screen.getByText('We have an application')).toBeInTheDocument()
    expect(screen.getByText('Safe lacquer protection')).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Eco-friendly water-based/)).toBeInTheDocument()
    expect(screen.getByText(/High-velocity air dryers/)).toBeInTheDocument()
    expect(screen.getByText(/Book your wash/)).toBeInTheDocument()
    expect(screen.getByText(/ceramic and wax coatings/)).toBeInTheDocument()
  })
})
