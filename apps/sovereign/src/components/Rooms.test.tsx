import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders section heading', () => {
    render(<Rooms />)
    expect(screen.getByText('Our Rooms')).toBeInTheDocument()
  })

  it('renders all 4 room cards', () => {
    render(<Rooms />)
    expect(screen.getByText('Standard Room')).toBeInTheDocument()
    expect(screen.getByText('Deluxe Room')).toBeInTheDocument()
    expect(screen.getByText('Executive Suite')).toBeInTheDocument()
    expect(screen.getByText('Presidential Suite')).toBeInTheDocument()
  })

  it('displays room prices', () => {
    render(<Rooms />)
    expect(screen.getByText('$199/night')).toBeInTheDocument()
    expect(screen.getByText('$299/night')).toBeInTheDocument()
    expect(screen.getByText('$449/night')).toBeInTheDocument()
    expect(screen.getByText('$799/night')).toBeInTheDocument()
  })

  it('renders book now buttons', () => {
    render(<Rooms />)
    const bookButtons = screen.getAllByText('Book Now')
    expect(bookButtons.length).toBeGreaterThanOrEqual(4)
  })

  it('displays room images with alt text', () => {
    render(<Rooms />)
    expect(screen.getByAltText('Standard Room')).toBeInTheDocument()
    expect(screen.getByAltText('Deluxe Room')).toBeInTheDocument()
    expect(screen.getByAltText('Executive Suite')).toBeInTheDocument()
    expect(screen.getByAltText('Presidential Suite')).toBeInTheDocument()
  })
})
