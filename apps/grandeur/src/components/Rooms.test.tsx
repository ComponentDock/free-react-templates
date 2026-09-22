import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the Our Rooms heading', () => {
    render(<Rooms />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    const roomsHeading = headings.find((h) => h.textContent?.includes('Our Rooms'))
    expect(roomsHeading).toBeDefined()
  })

  it('renders both room cards with prices', () => {
    render(<Rooms />)
    expect(screen.getByText('$250')).toBeDefined()
    expect(screen.getByText('$420')).toBeDefined()
  })

  it('renders room names', () => {
    render(<Rooms />)
    expect(screen.getByText('Double Deluxe Room')).toBeDefined()
    expect(screen.getByText('Premium Suite')).toBeDefined()
  })

  it('renders room descriptions', () => {
    render(<Rooms />)
    expect(screen.getByText(/Spacious room with a king-size bed/)).toBeDefined()
    expect(screen.getByText(/A luxurious suite with separate living/)).toBeDefined()
  })

  it('renders Book Now buttons', () => {
    render(<Rooms />)
    const bookButtons = screen.getAllByText('Book Now')
    expect(bookButtons.length).toBe(2)
  })

  it('renders all amenity labels', () => {
    render(<Rooms />)
    expect(screen.getAllByText('Air Condition').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Car Parking').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Swimming Pool').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Restaurant & Bar').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Vehicle Rental').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Complimentary Meal').length).toBeGreaterThanOrEqual(1)
  })

  it('renders room images', () => {
    render(<Rooms />)
    expect(screen.getByAltText('Double Deluxe Room')).toBeDefined()
    expect(screen.getByAltText('Premium Suite')).toBeDefined()
  })
})
