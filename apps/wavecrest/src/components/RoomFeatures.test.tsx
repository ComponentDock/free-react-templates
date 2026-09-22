import { render, screen } from '@testing-library/react'
import { RoomFeatures } from './RoomFeatures'

describe('RoomFeatures', () => {
  it('renders all 4 feature items', () => {
    render(<RoomFeatures />)
    expect(screen.getByText('Deluxe Room')).toBeInTheDocument()
    expect(screen.getByText('Beautiful Rooms')).toBeInTheDocument()
    expect(screen.getByText('Swimming Pool')).toBeInTheDocument()
    expect(screen.getByText('Luxury Resort')).toBeInTheDocument()
  })

  it('renders a heading for the section', () => {
    render(<RoomFeatures />)
    // The features are in h3 elements
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(4)
  })
})
