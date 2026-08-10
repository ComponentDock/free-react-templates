import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { PostGrid } from './PostGrid'
import { posts } from '../data'

describe('PostGrid', () => {
  it('renders one card per post with title, excerpt and meta row', () => {
    render(<PostGrid />)
    const section = screen.getByRole('region', { name: 'Recent posts' })
    const articles = within(section).getAllByRole('article')
    expect(articles).toHaveLength(posts.length)
    expect(screen.getAllByText('March 14, 2018').length).toBeGreaterThan(0)
    expect(screen.getAllByText('05').length).toBeGreaterThan(0)
  })

  it('renders every post title as a link', () => {
    render(<PostGrid />)
    for (const post of posts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
  })
})
