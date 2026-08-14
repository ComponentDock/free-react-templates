import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Room } from './Room'
import { ROOM_ROWS } from '../data'

describe('Room', () => {
  it('shows two full-bleed photo rows with white overlay cards and Read More buttons', () => {
    const { container } = render(<Room />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('src', ROOM_ROWS[0]!.image)

    for (const row of ROOM_ROWS) {
      expect(screen.getByRole('heading', { level: 3, name: row.title })).toBeInTheDocument()
    }

    const readMores = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMores).toHaveLength(2)
  })

  it('alternates the overlay card position between rows', () => {
    const { container } = render(<Room />)

    const cards = container.querySelectorAll('div[class*="absolute"]')
    expect(cards[0]!.className).toMatch(/right-\[30px\]/)
    expect(cards[1]!.className).toMatch(/left-\[30px\]/)
  })
})
