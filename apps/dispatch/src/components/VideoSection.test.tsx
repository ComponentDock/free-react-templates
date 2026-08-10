import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoSection } from './VideoSection'
import { videos, type Video } from '../data'

const rowFor = (video: Video) =>
  screen.getByRole('button', {
    name: (accessibleName: string) => accessibleName.startsWith(video.title),
  })

describe('VideoSection', () => {
  it('renders the player with the first video and a playlist of four rows', () => {
    render(<VideoSection />)
    expect(screen.getByRole('heading', { name: 'Most Popular Videos' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: videos[0]!.title })).toBeInTheDocument()
    expect(screen.getAllByText(`${videos[0]!.views} views · ${videos[0]!.date}`)).toHaveLength(2) // player meta + first playlist row
    expect(screen.getAllByRole('button')).toHaveLength(5) // play + 4 playlist rows
  })

  it('marks the first playlist row as active', () => {
    render(<VideoSection />)
    expect(rowFor(videos[0]!)).toHaveAttribute('aria-current', 'true')
  })

  it('updates the player panel when another video is activated', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    const row = rowFor(videos[2]!)
    await user.click(row)
    expect(row).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('heading', { name: videos[2]!.title })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: videos[0]!.title })).not.toBeInTheDocument()
  })
})
