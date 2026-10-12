import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { GALLERY, GALLERY_LEAD, GALLERY_NEXT, GALLERY_PREV, GALLERY_TITLE } from '../lib/site'

const track = () => screen.getByTestId('gallery-track')
const slides = () => Array.from(track().querySelectorAll('li'))

describe('Gallery', () => {
  it('runs all six frames through one track, with the first one current', () => {
    const { container } = render(<Gallery />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(GALLERY_TITLE)
    expect(screen.getByText(GALLERY_LEAD)).toBeInTheDocument()

    expect(slides()).toHaveLength(GALLERY.length)
    expect(slides().map((slide) => slide.getAttribute('data-active'))).toEqual([
      'true',
      'false',
      'false',
      'false',
      'false',
      'false',
    ])
    expect(slides().map((slide) => slide.className.includes('opacity-100'))).toEqual([
      true,
      false,
      false,
      false,
      false,
      false,
    ])
    expect(track().getAttribute('style')).toContain('translateX(-0%)')
    expect(screen.getByTestId('gallery-counter')).toHaveTextContent('1 / 6')

    const photos = Array.from(container.querySelectorAll('img'))

    expect(photos).toHaveLength(GALLERY.length)
    expect(photos[0]).toHaveAttribute('alt', GALLERY[0]?.alt)
  })

  it('slides a frame at a time and wraps from the last back to the first', () => {
    render(<Gallery />)

    fireEvent.click(screen.getByRole('button', { name: GALLERY_NEXT }))

    expect(screen.getByTestId('gallery-counter')).toHaveTextContent('2 / 6')
    expect(track().getAttribute('style')).toContain('translateX(-100%)')
    expect(slides()[1]).toHaveAttribute('data-active', 'true')

    fireEvent.click(screen.getByRole('button', { name: GALLERY_PREV }))
    fireEvent.click(screen.getByRole('button', { name: GALLERY_PREV }))

    expect(screen.getByTestId('gallery-counter')).toHaveTextContent('6 / 6')
    expect(track().getAttribute('style')).toContain('translateX(-500%)')

    fireEvent.click(screen.getByRole('button', { name: GALLERY_NEXT }))

    expect(screen.getByTestId('gallery-counter')).toHaveTextContent('1 / 6')
  })

  it('carries the two arrows and nothing else — the design has no filters', () => {
    render(<Gallery />)

    expect(screen.getAllByRole('button').map((control) => control.getAttribute('aria-label'))).toEqual([
      GALLERY_PREV,
      GALLERY_NEXT,
    ])
    expect(screen.queryByText(/^All$/)).toBeNull()
  })
})
