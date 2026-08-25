import { render, screen } from '@testing-library/react'
import { FeaturedRooms } from './FeaturedRooms'

describe('FeaturedRooms', () => {
  it('renders section heading', () => {
    render(<FeaturedRooms />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Rooms')
  })

  it('renders all 3 room cards', () => {
    render(<FeaturedRooms />)
    expect(screen.getByText('Suite Room')).toBeInTheDocument()
    expect(screen.getByText('Family Room')).toBeInTheDocument()
    expect(screen.getByText('Deluxe Room')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<FeaturedRooms />)
    expect(screen.getByText('$299/night')).toBeInTheDocument()
    expect(screen.getByText('$399/night')).toBeInTheDocument()
    expect(screen.getByText('$499/night')).toBeInTheDocument()
  })

  it('renders Book Now buttons for each room', () => {
    render(<FeaturedRooms />)
    const bookButtons = screen.getAllByRole('link', { name: 'Book Now' })
    expect(bookButtons.length).toBe(3)
  })

  it('has rooms section id', () => {
    const { container } = render(<FeaturedRooms />)
    expect(container.querySelector('#rooms')).toBeInTheDocument()
  })
})
