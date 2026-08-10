import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LatestPosts } from './LatestPosts'
import { latestPosts, loadMoreLabel, readMoreLabel } from '../data'

describe('LatestPosts', () => {
  it('renders the section title and four blog cards', () => {
    render(<LatestPosts />)

    expect(screen.getByRole('heading', { name: 'Latest Blog Posts.' })).toBeInTheDocument()
    for (const post of latestPosts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: readMoreLabel })).toHaveLength(latestPosts.length)
    expect(screen.getByText(latestPosts[0]!.date)).toBeInTheDocument()
    expect(screen.getByText(latestPosts[0]!.comments)).toBeInTheDocument()
  })

  it('renders the Load More Posts link', () => {
    render(<LatestPosts />)

    expect(screen.getByRole('link', { name: loadMoreLabel })).toBeInTheDocument()
  })
})
