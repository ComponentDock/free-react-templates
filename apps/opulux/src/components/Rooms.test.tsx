import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders all room cards', () => {
    render(<Rooms />)
    expect(screen.getByText('Our Rooms')).toBeInTheDocument()
    for (const room of [
      'Suite Room',
      'Family Room',
      'Deluxe Room',
      'Classic Room',
      'Superior Room',
      'Luxury Room',
    ]) {
      expect(screen.getByText(room)).toBeInTheDocument()
    }
    expect(screen.getByText('$120')).toBeInTheDocument()
    expect(screen.getByText('$500')).toBeInTheDocument()
    expect(screen.getAllByText('View Room Details →').length).toBe(6)
  })
})
