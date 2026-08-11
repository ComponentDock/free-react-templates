import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PostGrid } from './PostGrid'
import { gridPosts } from '../data'

describe('PostGrid', () => {
  it('renders every post with category, title, meta, excerpt, and Read more', () => {
    render(<PostGrid />)
    expect(screen.getByRole('region', { name: 'Blog posts' })).toBeInTheDocument()
    for (const post of gridPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getAllByText(post.category).length).toBeGreaterThan(0)
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getAllByText(post.comments).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(gridPosts.length)
  })

  it('spans the first and sixth cards across the full grid width', () => {
    const { container } = render(<PostGrid />)
    const articles = Array.from(container.querySelectorAll('article'))
    expect(articles).toHaveLength(gridPosts.length)
    expect(articles[0]!.className).toContain('md:col-span-2')
    expect(articles[5]!.className).toContain('md:col-span-2')
    expect(articles[1]!.className).not.toContain('md:col-span-2')
  })

  it('shows social icon links in the post meta', () => {
    render(<PostGrid />)
    expect(screen.getAllByRole('link', { name: 'Visit Facebook profile' }).length).toBeGreaterThan(
      0,
    )
    expect(screen.getAllByRole('link', { name: 'Visit Pinterest profile' }).length).toBeGreaterThan(
      0,
    )
  })
})
