import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { RecentPosts } from './RecentPosts'
import { mostRead, mostReadHeading, recentHeading, recentPosts } from '../data'

describe('RecentPosts', () => {
  it('renders the Recent Posts heading and the six post cards', () => {
    render(<RecentPosts />)
    expect(screen.getByRole('heading', { level: 2, name: recentHeading })).toBeInTheDocument()
    for (const post of recentPosts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
  })

  it('renders the Most Read sidebar with thumbnail rows', () => {
    render(<RecentPosts />)
    const sidebar = screen.getByRole('complementary', { name: mostReadHeading })
    expect(
      within(sidebar).getByRole('heading', { level: 2, name: mostReadHeading }),
    ).toBeInTheDocument()
    for (const post of mostRead) {
      expect(within(sidebar).getByRole('link', { name: post.title })).toBeInTheDocument()
    }
  })
})
