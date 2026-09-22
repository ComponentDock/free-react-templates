import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all 4 stats', () => {
    render(<Counter />)
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('20000')).toBeInTheDocument()
    expect(screen.getAllByText('100')).toHaveLength(2)
  })

  it('renders stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Hotel Branches')).toBeInTheDocument()
    expect(screen.getByText('Happy Guests')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByText('Destinations')).toBeInTheDocument()
  })
})
