import { render, screen } from '@testing-library/react'
import { PopularRooms } from './PopularRooms'
import { describe, expect, it } from 'vitest'

describe('PopularRooms', () => {
  it('renders the section heading', () => {
    render(<PopularRooms />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Popular Rooms')
  })

  it('renders all four room cards', () => {
    render(<PopularRooms />)
    expect(screen.getByText('Deluxe Suite')).toBeInTheDocument()
    expect(screen.getByText('Premium Room')).toBeInTheDocument()
    expect(screen.getByText('Executive Suite')).toBeInTheDocument()
    expect(screen.getByText('Family Room')).toBeInTheDocument()
  })

  it('displays prices for each room', () => {
    render(<PopularRooms />)
    expect(screen.getByText('$450/Night')).toBeInTheDocument()
    expect(screen.getByText('$320/Night')).toBeInTheDocument()
    expect(screen.getByText('$580/Night')).toBeInTheDocument()
    expect(screen.getByText('$380/Night')).toBeInTheDocument()
  })

  it('renders room images', () => {
    render(<PopularRooms />)
    expect(screen.getByAltText('Deluxe Suite')).toBeInTheDocument()
    expect(screen.getByAltText('Premium Room')).toBeInTheDocument()
  })
})
