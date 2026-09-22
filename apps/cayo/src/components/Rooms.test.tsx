import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders section heading', () => {
    render(<Rooms />)
    expect(screen.getByText('Book A Room')).toBeInTheDocument()
  })

  it('renders the Rooms subheading', () => {
    render(<Rooms />)
    expect(screen.getByText('Rooms')).toBeInTheDocument()
  })

  it('renders 6 room cards', () => {
    render(<Rooms />)
    expect(screen.getByText('Suite')).toBeInTheDocument()
    expect(screen.getByText('Family')).toBeInTheDocument()
    expect(screen.getByText('Deluxe')).toBeInTheDocument()
    expect(screen.getByText('Classic')).toBeInTheDocument()
    expect(screen.getByText('Superior')).toBeInTheDocument()
    expect(screen.getByText('Luxe')).toBeInTheDocument()
  })

  it('renders Reserve A Room buttons', () => {
    render(<Rooms />)
    const reserveButtons = screen.getAllByText('Reserve A Room')
    expect(reserveButtons).toHaveLength(6)
  })

  it('renders room images', () => {
    render(<Rooms />)
    const suiteImages = screen.getAllByAltText('Suite')
    expect(suiteImages.length).toBeGreaterThanOrEqual(1)
  })

  it('renders prices', () => {
    render(<Rooms />)
    expect(screen.getByText('$100 / night')).toBeInTheDocument()
    expect(screen.getByText('$140 / night')).toBeInTheDocument()
    expect(screen.getByText('$130 / night')).toBeInTheDocument()
    expect(screen.getByText('$200 / night')).toBeInTheDocument()
    expect(screen.getByText('$120 / night')).toBeInTheDocument()
    expect(screen.getByText('$500 / night')).toBeInTheDocument()
  })
})
