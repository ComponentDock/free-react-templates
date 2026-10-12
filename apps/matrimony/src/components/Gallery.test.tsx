import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { GALLERY } from '../lib/site'

const tiles = () => screen.getAllByRole('button', { name: /^Open photo:/ })

describe('Gallery', () => {
  it('lays its four tiles out in the design 4-8-8-4 run', () => {
    const { container } = render(<Gallery />)

    const band = container.querySelector('section') as HTMLElement

    expect(band).toHaveClass('bg-white', 'pt-[100px]')
    expect(band.querySelector('h2')).toBeNull()
    expect(tiles()).toHaveLength(4)
    expect(tiles().map((tile) => tile.className.includes('lg:w-1/3'))).toEqual([
      true,
      false,
      false,
      true,
    ])
    expect(tiles().map((tile) => tile.className.includes('lg:w-2/3'))).toEqual([
      false,
      true,
      true,
      false,
    ])
  })

  it('hides the caption and its plus disc behind a hover or focus reveal', () => {
    render(<Gallery />)

    const tile = screen.getByTestId('tile-image-01')

    expect(tile).toHaveClass('group', 'relative', 'lg:h-[565px]')

    const wash = tile.querySelector('span[aria-hidden="true"]') as HTMLElement

    expect(wash).toHaveClass('bg-brand', 'opacity-0', 'group-hover:opacity-80')

    const caption = screen.getByText('image 01')
    const wrap = caption.parentElement as HTMLElement

    expect(caption).toHaveClass('text-[24px]', 'text-white')
    expect(wrap).toHaveClass('opacity-0', 'group-focus-visible:opacity-100')
    expect(
      Array.from(wrap.querySelectorAll('svg')).filter((glyph) =>
        glyph.classList.contains('text-frame'),
      ),
    ).toHaveLength(1)
    expect(tile.querySelectorAll('svg')).toHaveLength(2)
  })

  it('opens the photograph in the viewer and closes it again', () => {
    render(<Gallery />)

    expect(screen.queryByRole('dialog')).toBeNull()

    fireEvent.click(tiles()[1] as HTMLElement)

    const viewer = screen.getByRole('dialog', { name: 'Photo viewer' })

    expect(viewer).toHaveAttribute('aria-modal', 'true')
    expect(within(viewer).getByRole('img')).toHaveAttribute('src', GALLERY[1]?.full)
    expect(within(viewer).getByRole('img')).toHaveAttribute('alt', GALLERY[1]?.alt)
    expect(within(viewer).getByText('image 02')).toBeInTheDocument()

    fireEvent.click(within(viewer).getByRole('button', { name: 'Close the photo viewer' }))

    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('closes on Escape and ignores other keys while the viewer is open', () => {
    render(<Gallery />)

    fireEvent.click(tiles()[0] as HTMLElement)
    fireEvent.keyDown(document, { key: 'ArrowRight' })

    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.queryByRole('dialog')).toBeNull()
  })
})
