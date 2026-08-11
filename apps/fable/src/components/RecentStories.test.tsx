import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RecentStories } from './RecentStories'
import { heroReadMore, recentLabel, recentStories } from '../data'

describe('RecentStories', () => {
  it('renders the heading and three photo cards with category, title, and CTA', () => {
    const { container } = render(<RecentStories />)
    expect(screen.getByRole('region', { name: recentLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: recentLabel })).toBeInTheDocument()

    for (const story of recentStories) {
      expect(screen.getAllByText(story.category).length).toBeGreaterThan(0)
      expect(screen.getAllByRole('heading', { name: story.title }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: heroReadMore })).toHaveLength(recentStories.length)
    expect(container.querySelectorAll('img')).toHaveLength(recentStories.length)
  })
})
