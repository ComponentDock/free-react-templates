import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and at least six photo tiles', () => {
    render(<Gallery />)
    expect(
      screen.getByRole('heading', { level: 2, name: /working on a salon/i }),
    ).toBeInTheDocument()
    const tiles = screen.getAllByRole('listitem')
    expect(tiles.length).toBeGreaterThanOrEqual(6)
    expect(tiles).toHaveLength(8)
    const first = tiles[0] as HTMLElement
    const second = tiles[1] as HTMLElement
    expect(within(first).getByText('Makeup')).toBeInTheDocument()
    expect(within(second).getByText('Model')).toBeInTheDocument()
  })
})
