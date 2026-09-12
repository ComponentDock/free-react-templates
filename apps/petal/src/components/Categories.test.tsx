import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders four category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Fresh Flower')).toBeInTheDocument()
    expect(screen.getByText('Succulent plants')).toBeInTheDocument()
    expect(screen.getByText('Cactus plants')).toBeInTheDocument()
    expect(screen.getByText('Furniture tree')).toBeInTheDocument()
  })

  it('shows item counts', () => {
    render(<Categories />)
    expect(screen.getAllByText(/25 items/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('( 162 items )')).toBeInTheDocument()
    expect(screen.getByText('( 58 items )')).toBeInTheDocument()
  })
})
