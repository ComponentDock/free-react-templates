import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Program Pricing')).toBeInTheDocument()
  })

  it('renders 3 pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Day 1')).toBeInTheDocument()
    expect(screen.getByText('Day 1, 2, 3')).toBeInTheDocument()
    expect(screen.getByText('Day 1, 2')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$5')).toBeInTheDocument()
    expect(screen.getByText('$8')).toBeInTheDocument()
    expect(screen.getByText('$6')).toBeInTheDocument()
  })

  it('renders View Details buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('View Details')
    expect(buttons.length).toBe(3)
  })
})
