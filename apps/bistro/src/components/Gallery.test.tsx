import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { GALLERY_TILES } from '../data'

describe('Gallery', () => {
  it('renders the header band with kicker and heading over a photo backdrop', () => {
    const { container } = render(<Gallery />)

    expect(screen.getByText('Our Offered Menu')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Some trendy and popular courses offered' }),
    ).toBeInTheDocument()

    // Band backdrop + 10 tile images.
    expect(container.querySelectorAll('img')).toHaveLength(11)
  })

  it('renders the 10-tile mosaic with seeded dish photos', () => {
    const { container } = render(<Gallery />)

    const tiles = container.querySelectorAll('figure')
    expect(tiles).toHaveLength(10)
    tiles.forEach((tile, index) => {
      const img = tile.querySelector('img')
      expect(img?.getAttribute('src')).toBe(
        `https://picsum.photos/seed/bistro-dish-${index + 1}/600/${GALLERY_TILES[index]!.tall ? 730 : 365}`,
      )
    })
  })

  it('alternates tall and short tiles per the reference mosaic', () => {
    const { container } = render(<Gallery />)

    const tiles = container.querySelectorAll('figure')
    expect(tiles[0]!.className).toMatch(/row-span-2/)
    expect(tiles[1]!.className).not.toMatch(/row-span-2/)
    expect(tiles[3]!.className).toMatch(/row-span-2/)
  })

  it('shows a hover/focus overlay caption on every tile', () => {
    const { container } = render(<Gallery />)

    expect(screen.getAllByText('Delicious Food')).toHaveLength(10)
    const overlay = container.querySelector('figcaption') as HTMLElement
    expect(overlay.className).toMatch(/opacity-0/)
    expect(overlay.className).toMatch(/group-hover:opacity-100/)
    expect(overlay.className).toMatch(/group-focus-within:opacity-100/)
    expect(screen.getByText('Grilled Salmon Bowl')).toBeInTheDocument()
    expect(screen.getByText('Beef Bourguignon')).toBeInTheDocument()
  })
})
