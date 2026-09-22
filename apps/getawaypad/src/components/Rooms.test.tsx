import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the section heading', () => {
    render(<Rooms />)
    expect(screen.getByText('Apartment Room')).toBeInTheDocument()
  })

  it('renders all four room cards', () => {
    render(<Rooms />)
    expect(screen.getByText('Suite Room')).toBeInTheDocument()
    expect(screen.getByText('Standard Room')).toBeInTheDocument()
    expect(screen.getByText('Family Room')).toBeInTheDocument()
    expect(screen.getByText('Deluxe Room')).toBeInTheDocument()
  })

  it('renders View Room Details links', () => {
    render(<Rooms />)
    const links = screen.getAllByText('View Room Details')
    expect(links).toHaveLength(4)
  })
})
