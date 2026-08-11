import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'
import { BLOG_POSTS, BLOG_READ_MORE, BLOG_TITLE } from '../data'

describe('BlogSection', () => {
  it('renders 3 blog cards with photos, titles, meta and read-more links', () => {
    const { container } = render(<BlogSection />)

    expect(
      screen.getByRole('heading', { level: 2, name: new RegExp(BLOG_TITLE) }),
    ).toBeInTheDocument()

    expect(container.querySelectorAll('article')).toHaveLength(3)
    expect(container.querySelectorAll('article img')).toHaveLength(3)
    expect(container.querySelector('article img')?.getAttribute('src')).toContain('caritas-blog-1')

    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getByText(post.comments)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: BLOG_READ_MORE })).toHaveLength(3)
  })
})
