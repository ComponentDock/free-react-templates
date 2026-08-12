import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { BLOG_HEADING, BLOG_INTRO, BLOG_POSTS } from '../data'

describe('Blog', () => {
  it('renders the heading, intro, and both article cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: BLOG_HEADING })).toBeInTheDocument()
    expect(screen.getByText(BLOG_INTRO)).toBeInTheDocument()
    for (const post of BLOG_POSTS) {
      // Both cards reuse the same title/byline in the reference design.
      expect(screen.getAllByRole('link', { name: post.title }).length).toBeGreaterThan(0)
      // The reference design repeats the same excerpt in both cards.
      expect(screen.getAllByText(post.excerpt).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.linkLabel).length).toBeGreaterThan(0)
      // The meta line splits date and author across nodes.
      expect(screen.getAllByText(new RegExp(post.date)).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.author).length).toBeGreaterThan(0)
    }
  })
})
