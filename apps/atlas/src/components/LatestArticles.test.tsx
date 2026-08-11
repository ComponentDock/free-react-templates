import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestArticles } from './LatestArticles'
import { latestHeading, latestPosts, videosHeading, videoPosts } from '../data'

describe('LatestArticles', () => {
  it('renders the Latest Articles heading and four rows with excerpts', () => {
    render(<LatestArticles />)
    expect(screen.getByRole('heading', { name: latestHeading })).toBeInTheDocument()

    latestPosts.forEach((post) => {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.excerpt!)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: post.title })).toHaveAttribute(
        'src',
        expect.stringContaining('/200/140'),
      )
    })
  })

  it('renders the Most Popular Videos heading and two video cards', () => {
    render(<LatestArticles />)
    expect(screen.getByRole('heading', { name: videosHeading })).toBeInTheDocument()

    videoPosts.forEach((post) => {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    })
    // Both video cards carry the same "Video" category chip.
    expect(screen.getAllByText(videoPosts[0]!.category)).toHaveLength(videoPosts.length)
  })
})
