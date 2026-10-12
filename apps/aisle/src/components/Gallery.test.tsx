import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import {
  GALLERY_CTA_HREF,
  GALLERY_CTA_LABEL,
  GALLERY_LABEL,
  GALLERY_TILES,
  GALLERY_TITLE,
  LIGHTBOX_CLOSE_LABEL,
  LIGHTBOX_LABEL,
  LIGHTBOX_NEXT_LABEL,
  LIGHTBOX_PREV_LABEL,
} from '../lib/site'

const tiles = () => screen.getAllByRole('button', { name: new RegExp(`^${GALLERY_LABEL}:`) })
const dialog = () => screen.queryByRole('dialog', { name: LIGHTBOX_LABEL })
const caption = () => (dialog() as HTMLElement).querySelector('p')?.textContent as string

describe('Gallery', () => {
  it('lays six frames out in a responsive grid, the first of them eager', () => {
    const { container } = render(<Gallery />)

    expect(screen.getByRole('heading', { level: 2, name: GALLERY_TITLE })).toBeInTheDocument()
    expect(tiles()).toHaveLength(6)
    expect(tiles().map((tile) => tile.getAttribute('aria-label'))).toEqual(
      GALLERY_TILES.map((tile) => `${GALLERY_LABEL}: ${tile.alt}`),
    )
    expect(container.querySelector('div.grid')).toHaveClass('grid-cols-2', 'md:grid-cols-3', 'gap-[30px]')

    const images = screen.getAllByRole('img')

    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('loading', 'eager')
    expect(images[1]).toHaveAttribute('loading', 'lazy')
    expect(images[5]).toHaveAttribute('decoding', 'async')
    expect(images[0]).toHaveAttribute('src', `https://picsum.photos/seed/${GALLERY_TILES[0]?.seed}/600/400`)
    expect(container.querySelector('.bg-lightbox')).toBeInTheDocument()
  })

  it('closes on a link to the contact block instead of a dead gallery route', () => {
    render(<Gallery />)

    const cta = screen.getByRole('link', { name: GALLERY_CTA_LABEL })

    expect(cta).toHaveAttribute('href', GALLERY_CTA_HREF)
    expect(cta).toHaveClass('border-brand', 'rounded-[1px]', 'tracking-[2px]')
  })

  it('opens the photograph in a labelled dialog over a dark overlay', () => {
    render(<Gallery />)

    expect(dialog()).not.toBeInTheDocument()

    fireEvent.click(tiles()[0] as HTMLElement)

    const viewer = screen.getByRole('dialog', { name: LIGHTBOX_LABEL })

    expect(viewer).toHaveClass('bg-lightbox', 'fixed', 'inset-0')
    expect(viewer).toHaveAttribute('aria-modal', 'true')
    expect(within(viewer).getByRole('img')).toHaveAttribute('alt', GALLERY_TILES[0]?.alt)
    expect(caption()).toBe(`1 / 6 — ${GALLERY_TILES[0]?.alt}`)
  })

  it('walks the six frames with the arrow keys and wraps around', () => {
    render(<Gallery />)

    fireEvent.click(tiles()[0] as HTMLElement)
    fireEvent.keyDown(document, { key: 'ArrowRight' })

    expect(caption()).toBe(`2 / 6 — ${GALLERY_TILES[1]?.alt}`)

    fireEvent.keyDown(document, { key: 'ArrowLeft' })
    fireEvent.keyDown(document, { key: 'ArrowLeft' })

    expect(caption()).toBe(`6 / 6 — ${GALLERY_TILES[5]?.alt}`)

    fireEvent.keyDown(document, { key: 'Tab' })

    expect(caption()).toBe(`6 / 6 — ${GALLERY_TILES[5]?.alt}`)
  })

  it('walks the frames from the two arrow controls as well', () => {
    render(<Gallery />)

    fireEvent.click(tiles()[2] as HTMLElement)
    fireEvent.click(screen.getByRole('button', { name: LIGHTBOX_NEXT_LABEL }))

    expect(caption()).toBe(`4 / 6 — ${GALLERY_TILES[3]?.alt}`)

    fireEvent.click(screen.getByRole('button', { name: LIGHTBOX_PREV_LABEL }))
    fireEvent.click(screen.getByRole('button', { name: LIGHTBOX_PREV_LABEL }))

    expect(caption()).toBe(`2 / 6 — ${GALLERY_TILES[1]?.alt}`)
  })

  it('closes on Escape and hands the focus back to the frame that opened it', () => {
    render(<Gallery />)

    const tile = tiles()[1] as HTMLElement

    tile.focus()
    fireEvent.click(tile)

    const viewer = screen.getByRole('dialog', { name: LIGHTBOX_LABEL })

    expect(document.activeElement).toBe(viewer)

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(dialog()).not.toBeInTheDocument()
    expect(document.activeElement).toBe(tile)
  })

  it('closes from its own control, which also returns the focus', () => {
    render(<Gallery />)

    const tile = tiles()[4] as HTMLElement

    fireEvent.click(tile)
    fireEvent.click(screen.getByRole('button', { name: LIGHTBOX_CLOSE_LABEL }))

    expect(dialog()).not.toBeInTheDocument()
    expect(document.activeElement).toBe(tile)
    expect(screen.getAllByRole('button', { name: new RegExp(`^${GALLERY_LABEL}:`) })).toHaveLength(6)
  })
})
