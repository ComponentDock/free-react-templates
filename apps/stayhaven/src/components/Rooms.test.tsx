import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'
import { ROOMS } from '../data'

describe('Rooms', () => {
  it('renders the heading and one card per room with a price line', () => {
    render(<Rooms />)

    expect(screen.getByRole('heading', { level: 2, name: 'Rooms & Suites' })).toBeInTheDocument()

    for (const room of ROOMS) {
      expect(screen.getByRole('heading', { level: 3, name: room.name })).toBeInTheDocument()
      expect(screen.getByText(room.price)).toBeInTheDocument()
      expect(screen.getAllByText(room.unit).length).toBeGreaterThanOrEqual(1)
      expect(screen.getByRole('img', { name: room.name })).toBeInTheDocument()
    }
  })
})
