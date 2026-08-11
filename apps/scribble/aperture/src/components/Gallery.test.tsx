import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import {
  filterBarLabel,
  gallerySectionLabel,
  galleryTiles,
  photoFilters,
  tileLinkLabel,
} from '../data'

describe('Gallery', () => {
  it('renders the filter bar with All and the five categories', () => {
    render(<Gallery />)
    const bar = screen.getByRole('group', { name: filterBarLabel })
    for (const filter of photoFilters) {
      expect(within(bar).getByRole('button', { name: filter.label })).toBeInTheDocument()
    }
  })

  it('renders all twenty photo tiles with captions', () => {
    render(<Gallery />)
    const section = screen.getByRole('region', { name: gallerySectionLabel })
    for (const tile of galleryTiles) {
      expect(
        within(section).getByRole('link', { name: tileLinkLabel(tile.title) }),
      ).toBeInTheDocument()
      expect(within(section).getByText(`${tile.category} / ${tile.descriptor}`)).toBeInTheDocument()
      expect(
        within(section).getByRole('heading', { level: 3, name: tile.title }),
      ).toBeInTheDocument()
    }
  })

  it('filters the grid to the active category and restores All', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const section = screen.getByRole('region', { name: gallerySectionLabel })

    await user.click(within(section).getByRole('button', { name: 'Photography' }))
    const photoTiles = galleryTiles.filter((tile) => tile.tag === 'photo')
    for (const tile of photoTiles) {
      expect(
        within(section).getByRole('link', { name: tileLinkLabel(tile.title) }),
      ).toBeInTheDocument()
    }
    for (const tile of galleryTiles.filter((tile) => tile.tag !== 'photo')) {
      expect(
        within(section).queryByRole('link', { name: tileLinkLabel(tile.title) }),
      ).not.toBeInTheDocument()
    }

    await user.click(within(section).getByRole('button', { name: 'All' }))
    for (const tile of galleryTiles) {
      expect(
        within(section).getByRole('link', { name: tileLinkLabel(tile.title) }),
      ).toBeInTheDocument()
    }
  })
})
