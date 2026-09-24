import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BlogGrid } from './BlogGrid'
import type { BlogPost } from './BlogCard'

const posts: BlogPost[] = Array.from({ length: 13 }, (_, i) => ({
  tag: `Tag${i}`,
  title: `Post ${i}`,
  description: `Description ${i}`,
  image: `https://picsum.photos/seed/grid${i}/400/300`,
  size: i % 5 === 0 ? 'large' : i % 3 === 0 ? 'wide' : i % 2 === 0 ? 'tall' : 'small',
}))

describe('BlogGrid', () => {
  it('renders all blog posts', () => {
    render(<BlogGrid posts={posts} />)
    posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    })
  })

  it('renders the section with aria-label', () => {
    render(<BlogGrid posts={posts} />)
    expect(screen.getByLabelText('Blog posts')).toBeInTheDocument()
  })

  it('renders the correct number of articles', () => {
    render(<BlogGrid posts={posts} />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(13)
  })
})
