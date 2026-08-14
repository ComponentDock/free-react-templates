import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Episodes } from './Episodes'

describe('Episodes', () => {
  it('renders the Popular Podcaster sidebar with six entries', () => {
    const { container } = render(<Episodes />)

    expect(screen.getByRole('heading', { name: 'Popular Podcaster' })).toBeInTheDocument()

    for (const name of [
      'Claire Stanford',
      'Dianne Winston',
      'Borris Larry',
      'Garry Smith',
      'Gerson Stack',
      'Jenna Stone',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    for (const count of [
      '32,420 podcasts',
      '12,381 podcasts',
      '9,291 podcasts',
      '3,291 podcasts',
      '1,092 podcasts',
      '911 podcasts',
    ]) {
      expect(screen.getByText(count)).toBeInTheDocument()
    }

    // Avatars are decorative (empty alt) — count them via the DOM.
    const avatars = container.querySelectorAll('aside img[class*="rounded-full"]')
    expect(avatars).toHaveLength(6)
  })

  it('renders five episode cards with image, title, byline, and audio player', () => {
    const { container } = render(<Episodes />)

    const titles = screen.getAllByRole('heading', {
      name: /Episode 0\d: How To Create Web Page Using Bootstrap 4/,
    })
    expect(titles).toHaveLength(5)
    expect(titles[0]).toHaveTextContent('Episode 08')

    const bylines = screen.getAllByText(/By Mike Smith/)
    expect(bylines).toHaveLength(5)
    for (const byline of bylines) {
      expect(byline).toHaveTextContent('16 September 2017')
      expect(byline).toHaveTextContent('1:30:20')
    }

    const players = container.querySelectorAll('audio[controls]')
    expect(players).toHaveLength(5)
    for (const player of players) {
      expect(player.className).toContain('audio-dark')
    }

    const photos = container.querySelectorAll('article img')
    expect(photos).toHaveLength(5)
    expect(photos[0]).toHaveAttribute('src', 'https://picsum.photos/seed/wavecast-08/600/400')
  })

  it('renders round pagination with the first page active and a next arrow', () => {
    render(<Episodes />)

    const pagination = screen.getByRole('navigation', {
      name: 'Episodes pagination',
    })
    const links = within(pagination).getAllByRole('link')

    expect(within(pagination).getByRole('link', { name: '1', current: true })).toBeInTheDocument()
    for (const page of ['2', '3', '4', '5']) {
      expect(within(pagination).getByRole('link', { name: page })).toBeInTheDocument()
    }
    expect(within(pagination).getByRole('link', { name: 'Next page' })).toBeInTheDocument()
    expect(links).toHaveLength(6)
  })
})
