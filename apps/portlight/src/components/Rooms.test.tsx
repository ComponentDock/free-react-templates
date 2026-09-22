import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders section heading', () => {
    render(<Rooms />)
    expect(screen.getByRole('heading', { name: /hotel master/i })).toBeInTheDocument()
  })

  it('renders all 4 room cards', () => {
    render(<Rooms />)
    expect(screen.getByRole('heading', { name: 'King Room' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Suite' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Deluxe' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Superior' })).toBeInTheDocument()
  })

  it('renders room prices', () => {
    render(<Rooms />)
    expect(screen.getByText('$120.00')).toBeInTheDocument()
    expect(screen.getByText('$200.00')).toBeInTheDocument()
    expect(screen.getByText('$160.00')).toBeInTheDocument()
    expect(screen.getByText('$140.00')).toBeInTheDocument()
  })

  it('renders per night labels', () => {
    render(<Rooms />)
    const perNightLabels = screen.getAllByText('per night')
    expect(perNightLabels).toHaveLength(4)
  })

  it('renders room images', () => {
    render(<Rooms />)
    expect(screen.getByAltText('King Room')).toHaveAttribute(
      'src',
      expect.stringContaining('portlight-room-king'),
    )
  })
})
