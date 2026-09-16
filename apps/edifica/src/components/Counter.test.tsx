import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all four stat numbers', () => {
    render(<Counter />)
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('8,500')).toBeInTheDocument()
    expect(screen.getByText('378')).toBeInTheDocument()
    expect(screen.getByText('1,200')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Counter />)
    expect(screen.getByText(/years of/i)).toBeInTheDocument()
    expect(screen.getByText(/projects done/i)).toBeInTheDocument()
    expect(screen.getByText(/professional experts/i)).toBeInTheDocument()
    expect(screen.getByText(/machineries equipments/i)).toBeInTheDocument()
  })
})
