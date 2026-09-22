import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the rooms heading', () => {
    render(<Rooms />)
    expect(screen.getByText('Great Offers')).toBeInTheDocument()
  })

  it('renders both room cards', () => {
    render(<Rooms />)
    expect(screen.getByText('Classic Room')).toBeInTheDocument()
    expect(screen.getByText('Deluxe Suite')).toBeInTheDocument()
  })

  it('renders room prices', () => {
    render(<Rooms />)
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$299')).toBeInTheDocument()
  })

  it('renders Book Now buttons', () => {
    render(<Rooms />)
    const buttons = screen.getAllByText('Book Now')
    expect(buttons).toHaveLength(2)
  })

  it('renders View All Rooms button', () => {
    render(<Rooms />)
    expect(screen.getByText('View All Rooms')).toBeInTheDocument()
  })

  it('renders room images with alt text', () => {
    render(<Rooms />)
    expect(screen.getByAltText('Classic Room')).toBeInTheDocument()
    expect(screen.getByAltText('Deluxe Suite')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Rooms className="custom-class" />)
    expect(screen.getByText('Great Offers').closest('section')).toHaveClass('custom-class')
  })
})
