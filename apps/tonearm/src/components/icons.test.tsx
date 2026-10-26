import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import {
  AlbumCover,
  BackIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  PodcastCover,
  QueueIcon,
} from './icons'

describe('transport and cover art', () => {
  it('authors the play and pause glyphs as filled shapes', () => {
    const { container, rerender } = render(<PlayIcon className="tonearm-i-play" />)

    const play = container.querySelector('svg')!
    expect(play).toHaveAttribute('viewBox', '0 0 24 24')
    expect(play).toHaveAttribute('aria-hidden', 'true')
    expect(play).toHaveAttribute('fill', 'currentColor')
    expect(play.getAttribute('class')).toBe('tonearm-i-play')

    rerender(<PauseIcon />)
    expect(container.querySelectorAll('svg rect')).toHaveLength(2)
  })

  it('draws the skip arrows as strokes so the numerals can sit on top', () => {
    const { container, rerender } = render(<BackIcon />)

    expect(container.querySelector('svg')).toHaveAttribute('stroke', 'currentColor')
    expect(container.querySelector('svg')).toHaveAttribute('stroke-width', '1.8')
    expect(container.querySelectorAll('svg path')).toHaveLength(2)

    rerender(<ForwardIcon />)
    expect(container.querySelectorAll('svg path')).toHaveLength(2)
  })

  it('renders the queue glyph as one stroked path', () => {
    const { container } = render(<QueueIcon />)
    const path = container.querySelector('svg path')!
    expect(path.getAttribute('d')).toContain('M18 15v6')
  })

  it('draws the podcast cover as a sun over two waves, with no image', () => {
    const { container } = render(<PodcastCover />)

    const circle = container.querySelector('circle')!
    expect(circle).toHaveAttribute('cx', '150')
    expect(circle).toHaveAttribute('cy', '104')
    expect(circle).toHaveAttribute('r', '28')
    expect(circle).toHaveAttribute('fill', '#ffd166')
    expect(container.querySelectorAll('path')).toHaveLength(2)
    expect(container.querySelector('img')).toBeNull()
  })

  it('draws the album cover as a pale disc over two hills', () => {
    const { container } = render(<AlbumCover />)

    const circle = container.querySelector('circle')!
    expect(circle).toHaveAttribute('cx', '100')
    expect(circle).toHaveAttribute('cy', '92')
    expect(circle).toHaveAttribute('r', '46')
    expect(container.querySelectorAll('path')).toHaveLength(2)
  })
})
