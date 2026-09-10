import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: '24/7 Car Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Lots of Location' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Reservation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Rental Cars' })).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Round the clock assistance/)).toBeInTheDocument()
    expect(screen.getByText(/Pick up and drop off/)).toBeInTheDocument()
    expect(screen.getByText(/Book your vehicle/)).toBeInTheDocument()
    expect(screen.getByText(/Wide selection/)).toBeInTheDocument()
  })
})
