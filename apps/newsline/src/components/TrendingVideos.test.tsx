import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { TrendingVideos } from './TrendingVideos'
import { durationBadgeLabel, trendingHeading, trendingSectionLabel, trendingVideos } from '../data'

describe('TrendingVideos', () => {
  it('renders the centered heading with a red underline', () => {
    render(<TrendingVideos />)
    const section = screen.getByRole('region', { name: trendingSectionLabel })
    expect(within(section).getByRole('heading', { name: trendingHeading })).toBeInTheDocument()
  })

  it('renders a card for every trending video with duration badge and meta', () => {
    render(<TrendingVideos />)
    const section = screen.getByRole('region', { name: trendingSectionLabel })
    for (const video of trendingVideos) {
      expect(within(section).getByRole('heading', { name: video.title })).toBeInTheDocument()
      expect(within(section).getByText(video.duration)).toBeInTheDocument()
      expect(within(section).getByTitle(durationBadgeLabel(video.duration))).toBeInTheDocument()
      expect(within(section).getAllByText(video.meta.comments).length).toBeGreaterThan(0)
      expect(within(section).getAllByText(video.meta.views).length).toBeGreaterThan(0)
      expect(within(section).getAllByText(video.meta.likes).length).toBeGreaterThan(0)
    }
  })
})
