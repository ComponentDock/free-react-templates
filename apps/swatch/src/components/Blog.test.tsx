import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the heading and six post cards with meta, title and blurb', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Recent From Blog' })).toBeInTheDocument()

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(6)

    for (const post of blogPosts) {
      expect(screen.getByAltText(post.title)).toHaveAttribute('loading', 'lazy')
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getByText(`${post.comments} Comments`)).toBeInTheDocument()
    }
  })
})
