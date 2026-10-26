import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { AlbumCard } from './AlbumCard'

describe('AlbumCard', () => {
  it('is the cream half of the pair', () => {
    const { container } = render(<AlbumCard />)

    const card = container.querySelector('section') as HTMLElement
    expect(card.className).toContain('rounded-card')
    expect(card.className).toContain('bg-cream')
    expect(card.className).toContain('p-[22px]')
    expect(card.className).toContain('text-cream-ink')
    expect(card.className).toContain('shadow-card')
    expect(card).toHaveAttribute('data-playing', 'false')
    expect(card).toHaveAttribute('aria-labelledby', 'tonearm-album')
  })

  it('heads the card with a 120 px cover, the copy stack and a 44 px disc', () => {
    const { container } = render(<AlbumCard />)

    const head = container.querySelector('section')!.firstElementChild as HTMLElement
    expect(head.className).toContain('flex')
    expect(head.className).toContain('gap-[18px]')
    expect(head.className).toContain('mb-4')

    const cover = head.querySelector('.tonearm-cover') as HTMLElement
    expect(cover.className).toContain('size-[120px]')
    expect(cover.className).toContain('flex-none')
    expect(cover.className).toContain('rounded-cover-sm')
    expect(cover.className).toContain('bg-[linear-gradient(180deg,#14b8a6,#5eead4_55%,#fde68a)]')

    expect(screen.getByText('Album · 2026')).toHaveClass('text-teal')
    const title = screen.getByRole('heading', { level: 2 })
    expect(title).toHaveAttribute('id', 'tonearm-album')
    expect(title.className).toContain('text-[24px]')
    expect(screen.getByText('Juniper Coast · 5 songs, 19 min')).toHaveClass('text-cream-muted')

    const play = screen.getByRole('button', { name: 'Play' })
    expect(play.className).toContain('size-[44px]')
    expect(play.className).toContain('bg-teal')
    expect(play.className).toContain('mt-3')
    expect(play.className).toContain('shadow-play-sm')
  })

  it('starts on track one with an empty teal bar', () => {
    render(<AlbumCard />)

    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-label', 'Song progress')
    expect(bar).toHaveAttribute('aria-valuemax', '214')
    expect(bar).toHaveAttribute('aria-valuenow', '0')

    const current = screen.getAllByRole('button').filter(
      (button) => button.getAttribute('aria-current') === 'true',
    )
    expect(current).toHaveLength(1)
    expect(current[0]!.textContent).toContain('Low Tide Lights')
  })

  it('plays from the disc and pauses from the same disc', () => {
    const { container } = render(<AlbumCard />)

    fireEvent.click(screen.getByRole('button', { name: 'Play' }))
    expect(container.querySelector('section')).toHaveAttribute('data-playing', 'true')
    expect(screen.getByRole('button', { name: 'Pause' })).toHaveAttribute('aria-pressed', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Pause' }))
    expect(container.querySelector('section')).toHaveAttribute('data-playing', 'false')
  })

  it('adopts the length of the row that is selected', () => {
    render(<AlbumCard />)

    fireEvent.click(screen.getByRole('button', { name: /Harbour Cats/ }))

    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuemax', '198')
    expect(bar).toHaveAttribute('aria-valuetext', '0:00 of 3:18')
    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument()
  })
})
