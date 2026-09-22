import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the Rooms heading', () => {
    render(<Rooms />)
    expect(screen.getByText('RoxyGlow Rooms')).toBeDefined()
  })

  it('renders the subheading', () => {
    render(<Rooms />)
    expect(screen.getByText("Hotel Master's Rooms")).toBeDefined()
  })

  it('renders all room cards with prices', () => {
    render(<Rooms />)
    expect(screen.getByText('$120')).toBeDefined()
    expect(screen.getByText('$150')).toBeDefined()
    expect(screen.getByText('$180')).toBeDefined()
    expect(screen.getByText('$250')).toBeDefined()
    expect(screen.getByText('$200')).toBeDefined()
  })

  it('renders room names', () => {
    render(<Rooms />)
    expect(screen.getByText('Suite')).toBeDefined()
    expect(screen.getByText('Family')).toBeDefined()
    expect(screen.getByText('Deluxe')).toBeDefined()
    expect(screen.getByText('Luxury')).toBeDefined()
    expect(screen.getByText('Superior')).toBeDefined()
  })

  it('renders View Room Details links', () => {
    render(<Rooms />)
    const links = screen.getAllByText('View Room Details')
    expect(links.length).toBe(5)
  })

  it('renders the welcome section text', () => {
    render(<Rooms />)
    expect(screen.getByText('Discover the Art of Hospitality')).toBeDefined()
  })

  it('renders room images', () => {
    render(<Rooms />)
    expect(screen.getByAltText('Suite')).toBeDefined()
    expect(screen.getByAltText('Family')).toBeDefined()
  })

  it('renders star ratings', () => {
    const { container } = render(<Rooms />)
    const stars = container.querySelectorAll('.fill-brand')
    expect(stars.length).toBe(25) // 5 rooms x 5 stars
  })
})
