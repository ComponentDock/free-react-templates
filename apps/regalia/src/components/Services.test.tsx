import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('displays the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('displays all 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Room Service')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Spa & Wellness')).toBeInTheDocument()
    expect(screen.getByText('Swimming Pool')).toBeInTheDocument()
  })

  it('displays service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/premium room service/)).toBeInTheDocument()
    expect(screen.getByText(/award-winning chefs/)).toBeInTheDocument()
  })
})
