import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('displays the section heading', () => {
    render(<Rooms />)
    expect(screen.getByText('Our Rooms')).toBeInTheDocument()
  })

  it('displays all 3 room cards', () => {
    render(<Rooms />)
    expect(screen.getByText('Deluxe Suite')).toBeInTheDocument()
    expect(screen.getByText('Executive Room')).toBeInTheDocument()
    expect(screen.getByText('Garden Villa')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<Rooms />)
    expect(screen.getByText('$299')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$449')).toBeInTheDocument()
  })

  it('has book buttons', () => {
    render(<Rooms />)
    const buttons = screen.getAllByText('Book Now')
    expect(buttons).toHaveLength(3)
  })

  it('displays room images', () => {
    render(<Rooms />)
    expect(screen.getByAltText('Deluxe Suite')).toBeInTheDocument()
    expect(screen.getByAltText('Executive Room')).toBeInTheDocument()
    expect(screen.getByAltText('Garden Villa')).toBeInTheDocument()
  })
})
