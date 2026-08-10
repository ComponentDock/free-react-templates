import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogGrid } from './BlogGrid'
import { blogPosts, loadMoreLabel, shareLabel } from '../data'

describe('BlogGrid', () => {
  it('renders every post with date, category, title, excerpt and byline', () => {
    render(<BlogGrid />)

    blogPosts.forEach((post) => {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    })
    expect(screen.getAllByText(blogPosts[0]!.byline)).toHaveLength(blogPosts.length)
  })

  it('shows share icons on the standard cards and a Load More button', () => {
    render(<BlogGrid />)

    const standardCount = blogPosts.filter((post) => post.variant === 'standard').length
    expect(screen.getAllByRole('link', { name: shareLabel })).toHaveLength(standardCount)
    expect(screen.getByRole('button', { name: loadMoreLabel })).toBeInTheDocument()
  })
})
