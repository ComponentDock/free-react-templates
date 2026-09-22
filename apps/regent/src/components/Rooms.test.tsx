import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'
import { ROOMS } from '../data'
import { describe, expect, it } from 'vitest'

describe('Rooms', () => {
  it('renders the section heading', () => {
    render(<Rooms />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Rooms')
  })

  it('renders all 6 room cards', () => {
    render(<Rooms />)
    for (const room of ROOMS) {
      expect(screen.getByText(room.name)).toBeInTheDocument()
      expect(screen.getByText(room.price)).toBeInTheDocument()
    }
  })

  it('renders room images', () => {
    render(<Rooms />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(ROOMS.length)
  })

  it('has gray background', () => {
    render(<Rooms />)
    const section = document.querySelector('section#rooms')
    expect(section).not.toBeNull()
    expect(section).toHaveClass('bg-gray-50')
  })
})
