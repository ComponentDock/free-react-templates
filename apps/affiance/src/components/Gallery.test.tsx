import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { GALLERY } from '../lib/site'

/** The eight frames of the grid, in order. */
function tiles(): HTMLElement[] {
  return Array.from(screen.getByRole('region', { name: 'Photo gallery' }).querySelectorAll('button'))
}

/** The frame for one photograph. */
function tile(index: number): HTMLElement {
  return tiles()[index] as HTMLElement
}

describe('Gallery', () => {
  it('heads the band with the design title over a no-gutter grid', () => {
    const { container } = render(<Gallery />)

    expect(screen.getByText('Gallery')).toHaveClass('border-dashed')
    expect(screen.getByRole('heading', { level: 2, name: 'Photo Gallery' })).toHaveClass('font-script')

    const grid = container.querySelector('.mt-\\[50px\\]') as HTMLElement

    expect(grid).toHaveClass('grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-4')
    expect(grid.children).toHaveLength(GALLERY.length)
  })

  it('dresses every frame with the photograph, the wash and the doves disc', () => {
    render(<Gallery />)

    const frame = tile(0)

    expect(frame).toHaveClass('group', 'h-[300px]', 'overflow-hidden')
    expect(frame.querySelector('img')).toHaveClass('object-cover')
    expect(frame.querySelector('img')?.getAttribute('src')).toContain(
      'picsum.photos/seed/affiance-6/900/900',
    )

    const wash = frame.querySelectorAll('span[aria-hidden]')[0] as HTMLElement
    const disc = frame.querySelectorAll('span[aria-hidden]')[1] as HTMLElement

    expect(wash).toHaveClass('bg-brand', 'opacity-0', 'group-hover:opacity-80', 'group-focus-visible:opacity-80')
    expect(disc).toHaveClass('h-[70px]', 'w-[70px]', 'rounded-full', 'bg-white', 'group-hover:opacity-100')
    expect(disc.querySelector('svg')).toHaveClass('h-[50px]', 'text-brand')
  })

  it('opens the photograph in a labelled lightbox and closes it again', () => {
    render(<Gallery />)

    expect(screen.queryByRole('dialog')).toBeNull()

    fireEvent.click(tile(2))

    const dialog = screen.getByRole('dialog', { name: 'Photo viewer' })

    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog.querySelector('img')?.getAttribute('src')).toContain(
      'picsum.photos/seed/affiance-18/1200/900',
    )
    expect(screen.getByText(GALLERY[2]!.alt)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close the photo viewer' }))

    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('closes on Escape and ignores every other key', () => {
    render(<Gallery />)

    fireEvent.click(tile(0))
    fireEvent.keyDown(document, { key: 'Enter' })

    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('opens a frame from the keyboard', () => {
    render(<Gallery />)

    const frame = tile(1)

    frame.focus()
    fireEvent.click(frame)

    expect(screen.getByRole('dialog').querySelector('img')?.getAttribute('src')).toContain(
      'picsum.photos/seed/affiance-12/1200/900',
    )
  })
})
