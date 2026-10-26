import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ALBUM, PODCAST } from '../data'
import { usePlayer } from '../hooks/usePlayer'
import { ProgressRow } from './ProgressRow'

function PodcastBar() {
  const player = usePlayer({ duration: PODCAST.duration, elapsed: PODCAST.elapsed })
  return <ProgressRow variant="podcast" player={player} />
}

function AlbumBar() {
  const player = usePlayer({ duration: ALBUM.tracks[0]!.duration, elapsed: 0 })
  return <ProgressRow variant="album" player={player} />
}

describe('ProgressRow', () => {
  it('exposes the episode bar as a read-only progressbar at 44.208 %', () => {
    render(<PodcastBar />)

    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-label', 'Episode progress')
    expect(bar).toHaveAttribute('aria-valuemin', '0')
    expect(bar).toHaveAttribute('aria-valuemax', '2538')
    expect(bar).toHaveAttribute('aria-valuenow', '1122')
    expect(bar).toHaveAttribute('aria-valuetext', '18:42 of 42:18')
    expect(bar.className).toContain('h-1.5')
    expect(bar.className).toContain('rounded-full')
    expect(bar.className).toContain('overflow-hidden')
    expect(bar.className).toContain('bg-night-track')

    const fill = screen.getByTestId('tonearm-fill')
    expect(parseFloat(fill.style.width)).toBeCloseTo(44.208, 3)
    expect(fill.className).toContain('bg-[linear-gradient(90deg,#ffb27a,#ff5f8f)]')
    expect(fill.className).toContain('tonearm-fill')
  })

  it('prints elapsed and remaining time on either side', () => {
    render(<PodcastBar />)

    expect(screen.getByText('18:42')).toBeInTheDocument()
    expect(screen.getByText('-23:36')).toBeInTheDocument()
  })

  it('renders the album bar empty, teal and on the cream track', () => {
    render(<AlbumBar />)

    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-label', 'Song progress')
    expect(bar).toHaveAttribute('aria-valuemax', '214')
    expect(bar).toHaveAttribute('aria-valuenow', '0')
    expect(bar).toHaveAttribute('aria-valuetext', '0:00 of 3:34')
    expect(bar.className).toContain('bg-cream-track')

    const fill = screen.getByTestId('tonearm-fill')
    expect(fill.style.width).toBe('0%')
    expect(fill.className).toContain('bg-teal')
    expect(fill.className).not.toContain('linear-gradient')

    expect(screen.getByText('0:00')).toBeInTheDocument()
    expect(screen.getByText('-3:34')).toBeInTheDocument()
  })

  it('stays out of the tab order', () => {
    render(<PodcastBar />)
    expect(screen.getByRole('progressbar')).not.toHaveAttribute('tabindex')
  })
})
