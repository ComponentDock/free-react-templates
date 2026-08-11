import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import {
  adLabel,
  newestVideoTitle,
  newestVideos,
  playLabel,
  topStories,
  topStoriesTitle,
} from '../data'

describe('Sidebar', () => {
  it('renders the TOP STORIES heading with a thumbnail + title row per story', () => {
    const { container } = render(<Sidebar />)
    const aside = screen.getByRole('complementary', { name: 'Sidebar' })
    expect(within(aside).getByRole('heading', { name: topStoriesTitle })).toBeInTheDocument()
    for (const story of topStories) {
      expect(
        within(aside).getAllByRole('heading', { name: story.title }).length,
      ).toBeGreaterThanOrEqual(1)
    }
    expect(container.querySelectorAll('img')).toHaveLength(topStories.length)
  })

  it('renders the NEWEST VIDEO list with a play icon per row', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: newestVideoTitle })).toBeInTheDocument()
    for (const video of newestVideos) {
      expect(screen.getByRole('link', { name: playLabel(video.title) })).toBeInTheDocument()
    }
  })

  it('renders two ad placeholder blocks', () => {
    render(<Sidebar />)
    expect(screen.getAllByRole('img', { name: adLabel })).toHaveLength(2)
  })
})
