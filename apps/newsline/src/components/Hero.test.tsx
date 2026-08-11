import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { durationBadgeLabel, heroSectionLabel, heroVideos, playLabel, playlistLabel } from '../data'

describe('Hero', () => {
  it('renders the first featured video with play overlay, tag, meta and duration', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: heroSectionLabel })
    const featured = heroVideos[0]!
    const card = within(section).getByRole('article')
    expect(within(card).getByRole('heading', { name: featured.title })).toBeInTheDocument()
    expect(within(card).getByRole('link', { name: playLabel(featured.title) })).toBeInTheDocument()
    expect(within(card).getByText(featured.category)).toBeInTheDocument()
    expect(within(card).getByText(featured.duration)).toBeInTheDocument()
    expect(within(card).getByTitle(durationBadgeLabel(featured.duration))).toBeInTheDocument()
    expect(within(card).getByText(featured.meta.comments)).toBeInTheDocument()
    expect(within(card).getByText(featured.meta.views)).toBeInTheDocument()
    expect(within(card).getByText(featured.meta.likes)).toBeInTheDocument()
  })

  it('lists every playlist row with thumbnail and meta', () => {
    render(<Hero />)
    const playlist = screen.getByRole('region', { name: playlistLabel })
    for (const video of heroVideos) {
      expect(
        within(playlist).getByRole('button', { name: `Show ${video.title}` }),
      ).toBeInTheDocument()
      expect(within(playlist).getAllByText(video.meta.comments).length).toBeGreaterThan(0)
    }
  })

  it('marks the first playlist row active by default', () => {
    render(<Hero />)
    const playlist = screen.getByRole('region', { name: playlistLabel })
    expect(
      within(playlist).getByRole('button', { name: `Show ${heroVideos[0]!.title}` }),
    ).toHaveAttribute('aria-current', 'true')
  })

  it('swaps the featured video when a playlist row is activated', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const target = heroVideos[3]!
    await user.click(screen.getByRole('button', { name: `Show ${target.title}` }))
    const section = screen.getByRole('region', { name: heroSectionLabel })
    const card = within(section).getByRole('article')
    expect(within(card).getByRole('heading', { name: target.title })).toBeInTheDocument()
    expect(within(card).getByText(target.category)).toBeInTheDocument()
    expect(within(card).getByText(target.duration)).toBeInTheDocument()
    const playlist = screen.getByRole('region', { name: playlistLabel })
    expect(within(playlist).getByRole('button', { name: `Show ${target.title}` })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
