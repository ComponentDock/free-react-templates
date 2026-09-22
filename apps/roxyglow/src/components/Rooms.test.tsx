import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the section heading', () => {
    render(<Rooms />)
    expect(screen.getByText('RoxyGlow Rooms')).toBeInTheDocument()
    expect(screen.getByText("Hotel Master's Rooms")).toBeInTheDocument()
  })

  it('renders all five room cards', () => {
    render(<Rooms />)
    expect(screen.getByText('Suite')).toBeInTheDocument()
    expect(screen.getByText('Family')).toBeInTheDocument()
    expect(screen.getByText('Deluxe')).toBeInTheDocument()
    expect(screen.getByText('Luxury')).toBeInTheDocument()
    expect(screen.getByText('Superior')).toBeInTheDocument()
  })

  it('shows prices for each room', () => {
    render(<Rooms />)
    expect(screen.getByText('$120/night')).toBeInTheDocument()
    expect(screen.getByText('$150/night')).toBeInTheDocument()
    expect(screen.getByText('$180/night')).toBeInTheDocument()
    expect(screen.getByText('$250/night')).toBeInTheDocument()
    expect(screen.getByText('$200/night')).toBeInTheDocument()
  })

  it('has View Room Details links', () => {
    render(<Rooms />)
    const links = screen.getAllByText(/View Room Details/)
    expect(links.length).toBe(5)
  })

  it('displays five gold stars per room', () => {
    const { container } = render(<Rooms />)
    const stars = container.querySelectorAll('.fill-brand')
    expect(stars.length).toBe(25) // 5 rooms * 5 stars
  })
})
