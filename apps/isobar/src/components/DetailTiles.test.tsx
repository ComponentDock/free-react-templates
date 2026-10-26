import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NOW } from '../data'
import { DetailTiles } from './DetailTiles'

describe('DetailTiles', () => {
  it('renders four name/value pairs in a named description list', () => {
    const { container } = render(<DetailTiles details={NOW.details} />)

    const list = container.querySelector('dl') as HTMLElement
    expect(list).toHaveAttribute('aria-label', 'Current conditions')
    expect(list.getAttribute('class')).toContain('isobar-tiles')
    expect(list.querySelectorAll('div')).toHaveLength(4)

    expect(screen.getByText('Feels like').tagName.toLowerCase()).toBe('dt')
    expect(screen.getByText('24°').tagName.toLowerCase()).toBe('dd')
    expect(screen.getByText('Wind')).toBeInTheDocument()
    expect(screen.getByText('14 km/h NW')).toBeInTheDocument()
    expect(screen.getByText('Humidity')).toBeInTheDocument()
    expect(screen.getByText('58%')).toBeInTheDocument()
    expect(screen.getByText('UV index')).toBeInTheDocument()
    expect(screen.getByText('6 High')).toBeInTheDocument()
    expect(container.querySelectorAll('dt')).toHaveLength(4)
    expect(container.querySelectorAll('dd')).toHaveLength(4)
  })

  it('paints each tile as a translucent 14 px plate', () => {
    const { container } = render(<DetailTiles details={NOW.details} />)

    const tiles = container.querySelectorAll('dl > div')
    expect(tiles).toHaveLength(4)
    for (const tile of tiles) {
      const className = tile.getAttribute('class')
      expect(className).toContain('rounded-tile')
      expect(className).toContain('bg-tile')
      expect(className).toContain('px-3')
      expect(className).toContain('py-2.5')
    }
    expect(tiles[0]?.querySelector('dt')?.getAttribute('class')).toContain('text-[12px]')
    expect(tiles[0]?.querySelector('dd')?.getAttribute('class')).toContain('text-[15px]')
  })
})
