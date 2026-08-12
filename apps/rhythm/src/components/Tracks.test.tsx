import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tracks } from './Tracks'
import { allTracksUrl, tracks } from '../data'

describe('Tracks', () => {
  it('shows the title pair and the outline "View all tracks" button', () => {
    render(<Tracks />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Latest tracks/)
    const viewAll = screen.getByRole('link', { name: 'View all tracks' })
    expect(viewAll).toHaveAttribute('href', allTracksUrl)
    expect(viewAll).toHaveAttribute('target', '_blank')
  })

  it('renders four static player rows with title, time labels and volume', () => {
    render(<Tracks />)

    const playButtons = screen.getAllByRole('button', { name: /^Play / })
    expect(playButtons).toHaveLength(tracks.length)

    for (const track of tracks) {
      expect(screen.getByRole('heading', { name: track.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('0:00')).toHaveLength(tracks.length)
    for (const track of tracks) {
      expect(screen.getByText(track.duration)).toBeInTheDocument()
    }
  })

  it('toggles the play/pause state of a row', async () => {
    const user = userEvent.setup()
    render(<Tracks />)

    const firstTrack = tracks[0]!
    const firstPlay = screen.getByRole('button', { name: `Play ${firstTrack.title}` })
    await user.click(firstPlay)
    expect(screen.getByRole('button', { name: `Pause ${firstTrack.title}` })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    await user.click(screen.getByRole('button', { name: `Pause ${firstTrack.title}` }))
    expect(screen.getByRole('button', { name: `Play ${firstTrack.title}` })).toBeInTheDocument()
  })
})
