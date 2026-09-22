import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders section heading', () => {
    render(<Rooms />)
    expect(screen.getByText('Hotel Rooms')).toBeInTheDocument()
  })

  it('renders the Our Rooms subheading', () => {
    render(<Rooms />)
    expect(screen.getByText('Our Rooms')).toBeInTheDocument()
  })

  it('renders 4 room cards', () => {
    render(<Rooms />)
    const roomNames = screen.getAllByText('Deluxe Room')
    expect(roomNames).toHaveLength(4)
  })

  it('renders Booking Now links', () => {
    render(<Rooms />)
    const bookingLinks = screen.getAllByText('Booking Now')
    expect(bookingLinks).toHaveLength(4)
  })

  it('renders room images', () => {
    render(<Rooms />)
    const images = screen.getAllByAltText('Deluxe Room')
    expect(images).toHaveLength(4)
  })

  it('renders prices', () => {
    render(<Rooms />)
    expect(screen.getByText('$299 / night')).toBeInTheDocument()
    expect(screen.getByText('$349 / night')).toBeInTheDocument()
    expect(screen.getByText('$399 / night')).toBeInTheDocument()
    expect(screen.getByText('$499 / night')).toBeInTheDocument()
  })
})
