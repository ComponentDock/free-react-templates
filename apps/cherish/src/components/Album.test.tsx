import { render, screen, within } from '@testing-library/react'
import { Album } from './Album'
import { ALBUM_BAND_PHOTO, ALBUM_EYEBROW, ALBUM_FRAMES, ALBUM_HEADING } from '../lib/site'
import { albumClass, albumFrameClass, albumImageClass } from '../lib/styles'

describe('Album — the eight frames', () => {
  it('bleeds past the container with its own title band behind the grid', () => {
    render(<Album />)

    const band = screen.getByTestId('portraits')

    expect(band.className).toBe(albumClass)
    expect(band).toHaveAttribute('aria-labelledby', 'portraits-heading')
    expect(within(band).getByText(ALBUM_EYEBROW)).toBeInTheDocument()
    expect(within(band).getByRole('heading', { level: 2 }).textContent).toBe(ALBUM_HEADING)

    const backdrop = band.firstElementChild as HTMLElement

    expect(backdrop.style.backgroundImage).toContain(ALBUM_BAND_PHOTO)
  })

  it('hangs eight captioned frames under it', () => {
    const { container } = render(<Album />)

    const frames = container.querySelectorAll(`.${albumFrameClass}`)

    expect(frames).toHaveLength(8)
    expect(frames).toHaveLength(ALBUM_FRAMES.length)

    const images = screen.getAllByRole('img')

    expect(images.map((image) => image.getAttribute('alt'))).toEqual(
      ALBUM_FRAMES.map((frame) => frame.caption),
    )
    expect(images.map((image) => image.getAttribute('src'))).toEqual(
      ALBUM_FRAMES.map((frame) => frame.image),
    )
    expect(images[0]?.className).toBe(albumImageClass)
    expect(images[0]).toHaveAttribute('loading', 'lazy')
    expect(images[0]).toHaveAttribute('title', ALBUM_FRAMES[0]?.caption)
  })
})
