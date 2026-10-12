import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'
import {
  ALL_FILTER,
  FEATURES_TITLE,
  FILTERS,
  GALLERY,
  GALLERY_FILTER_LABEL,
  SECTION_IDS,
  TILE_TARGET,
  VIEW_MORE_LABEL,
} from '../lib/site'
import { tileHiddenClass, tileSizes } from '../lib/styles'

describe('Features', () => {
  it('renders the gallery heading, the six filters and the six frames', () => {
    const { container } = render(<Features />)

    expect(container.querySelector('section')?.id).toBe(SECTION_IDS.portfolio)
    expect(screen.getByRole('heading', { level: 2, name: FEATURES_TITLE })).toBeInTheDocument()

    const filters = screen.getAllByRole('button')

    expect(filters).toHaveLength(FILTERS.length)
    expect(filters.map((button) => button.textContent)).toEqual([...FILTERS])
    expect(screen.getByRole('group', { name: GALLERY_FILTER_LABEL })).toBeInTheDocument()
    expect(container.querySelectorAll('a[href="' + TILE_TARGET + '"]')).toHaveLength(
      GALLERY.length + 1,
    )
  })

  it('spans the masonry rows the design sets and starts on All', () => {
    const { container } = render(<Features />)

    expect(screen.getByRole('button', { name: ALL_FILTER })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Couple' })).toHaveAttribute('aria-pressed', 'false')

    const spans = [...container.querySelectorAll('a[class*="row-end-["]')].map((tile) =>
      [...tile.classList].find((token) => token.startsWith('row-end-')),
    )

    expect(spans).toHaveLength(GALLERY.length)
    expect(new Set(spans)).toEqual(
      new Set(Object.values(tileSizes).map((set) => set.split(' ')[1])),
    )
  })

  it('names every frame with the caption and the couple it carries', () => {
    render(<Features />)

    expect(screen.getByRole('link', { name: /Ceremonies Vows at first light/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: VIEW_MORE_LABEL })).toHaveAttribute('href', TILE_TARGET)
  })

  it('hides the frames that do not answer the filter and restores them on All', () => {
    const { container } = render(<Features />)
    const hidden = () => container.querySelectorAll('a.' + tileHiddenClass).length
    const couple = container.querySelectorAll('a:not(.' + tileHiddenClass + ')[class*="row-end-["]')

    expect(hidden()).toBe(0)
    expect(couple).toHaveLength(GALLERY.length)

    fireEvent.click(screen.getByRole('button', { name: 'Honeymoon' }))

    expect(hidden()).toBe(GALLERY.length - 1)
    expect(screen.getByRole('button', { name: 'Honeymoon' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: ALL_FILTER })).toHaveAttribute(
      'aria-pressed',
      'false',
    )

    fireEvent.click(screen.getByRole('button', { name: ALL_FILTER }))

    expect(hidden()).toBe(0)
    expect(container.querySelectorAll('a[class*="row-end-["]')).toHaveLength(GALLERY.length)
  })

  it('keeps the veil and the captions in the document for every frame', () => {
    const { container } = render(<Features />)

    expect(container.querySelectorAll('img')).toHaveLength(GALLERY.length)
    expect(
      [...container.querySelectorAll('img')].every((img) => img.getAttribute('alt') === ''),
    ).toBe(true)
    expect(
      [...container.querySelectorAll('img')].every((img) => img.getAttribute('loading') === 'lazy'),
    ).toBe(true)
    expect(container.querySelectorAll('a[class*="row-end-["] h2')).toHaveLength(GALLERY.length)
  })
})
