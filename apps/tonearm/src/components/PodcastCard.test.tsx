import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { PodcastCard } from './PodcastCard'

describe('PodcastCard', () => {
  it('is one 28 px panel on the dark surface, top-aligned and unstretched', () => {
    const { container } = render(<PodcastCard />)

    const card = container.querySelector('section') as HTMLElement
    expect(card.className).toContain('tonearm-card')
    expect(card.className).toContain('rounded-card')
    expect(card.className).toContain('bg-night')
    expect(card.className).toContain('p-[22px]')
    expect(card.className).toContain('text-[15px]')
    expect(card.className).toContain('leading-[1.45]')
    expect(card.className).toContain('shadow-card')
    expect(card).toHaveAttribute('data-playing', 'false')
    expect(card).toHaveAttribute('aria-labelledby', 'tonearm-episode')
  })

  it('fills a square cover with authored art and the show name', () => {
    const { container } = render(<PodcastCard />)

    const cover = container.querySelector('.tonearm-cover') as HTMLElement
    expect(cover.className).toContain('aspect-square')
    expect(cover.className).toContain('rounded-cover')
    expect(cover.className).toContain(
      'bg-[linear-gradient(160deg,#3a0ca3,#7209b7_60%,#b5179e)]',
    )
    expect(cover).toHaveAttribute('aria-hidden', 'true')
    expect(cover.querySelector('svg')).not.toBeNull()

    const overlay = cover.querySelector('span') as HTMLElement
    expect(overlay.textContent).toBe('The LongCommute')
    expect(overlay.className).toContain('text-[clamp(30px,6vw,44px)]')
    expect(overlay.className).toContain('tracking-[-.04em]')
    expect(overlay.className).toContain('leading-[.95]')
  })

  it('reads episode, title and byline under the cover', () => {
    render(<PodcastCard />)

    expect(screen.getByText('Episode 84 · 42 min')).toHaveClass('text-amber', 'text-[13px]')
    const title = screen.getByRole('heading', { level: 2 })
    expect(title).toHaveAttribute('id', 'tonearm-episode')
    expect(title.textContent).toBe('Why cities are planting forests on rooftops')
    expect(title.className).toContain('text-[21px]')
    expect(title.className).toContain('tracking-[-.01em]')
    expect(screen.getByText('The Long Commute · with Priya Nair')).toHaveClass('text-night-muted')
  })

  it('mounts an independent player: transport and bar start at the data offset', () => {
    render(<PodcastCard />)

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '1122')
    expect(screen.getAllByRole('button')).toHaveLength(5)
    expect(screen.queryByRole('img')).toBeNull()
  })

  it('paints the playing state on the card itself', () => {
    const { container } = render(<PodcastCard />)

    fireEvent.click(screen.getByRole('button', { name: 'Play' }))

    expect(container.querySelector('section')).toHaveAttribute('data-playing', 'true')
    expect(screen.getByRole('button', { name: 'Pause' })).toHaveAttribute('aria-pressed', 'true')
  })
})
