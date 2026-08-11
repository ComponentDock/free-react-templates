import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RecentPosts } from './RecentPosts'
import { postsLabel, recentPosts } from '../data'

describe('RecentPosts', () => {
  it('renders four posts with meta bars, tag lines, excerpts and READ MORE buttons', () => {
    const { container } = render(<RecentPosts />)

    expect(screen.getByRole('region', { name: postsLabel })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(recentPosts.length)
    expect(screen.getAllByText(recentPosts[0]!.title).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Admin \/ January 12,2019 \/ 2 Comments/)).toHaveLength(
      recentPosts.length,
    )
    expect(screen.getAllByText(/Tag: travel, life style, technology, fashion/)).toHaveLength(
      recentPosts.length,
    )
    expect(screen.getAllByRole('link', { name: /READ MORE/ })).toHaveLength(recentPosts.length)
  })

  it('styles READ MORE as a black button that inverts to orange on hover', () => {
    render(<RecentPosts />)

    const button = screen.getAllByRole('link', { name: /READ MORE/ })[0]!
    expect(button.className).toContain('bg-coal')
    expect(button.className).toContain('text-brand')
    expect(button.className).toContain('hover:bg-brand')
  })

  it('uses seeded placeholder images for every post', () => {
    const { container } = render(<RecentPosts />)
    const imgs = Array.from(container.querySelectorAll('img'))
    for (const [index, img] of imgs.entries()) {
      expect(img).toHaveAttribute('src', expect.stringContaining(`serif-post-${index + 1}`))
      expect(img).toHaveAttribute('alt', expect.stringContaining(`post ${index + 1}`))
    }
  })
})
