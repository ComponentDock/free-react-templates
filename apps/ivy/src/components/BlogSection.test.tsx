import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'
import { BLOG_POSTS } from '../data'

describe('BlogSection', () => {
  it('renders the heading and three blog cards', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
    const titles = screen.getAllByRole('heading', {
      level: 3,
      name: 'Skills To Develop Your Child Memory',
    })
    expect(titles).toHaveLength(BLOG_POSTS.length)
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(BLOG_POSTS.length)
  })

  it('renders the orange date block and meta for each card', () => {
    render(<BlogSection />)
    const post = BLOG_POSTS[0]!
    expect(screen.getAllByText(post.dateParts.day)).toHaveLength(BLOG_POSTS.length)
    expect(screen.getAllByText(post.dateParts.month)).toHaveLength(BLOG_POSTS.length)
    expect(screen.getAllByText(post.dateParts.year)).toHaveLength(BLOG_POSTS.length)
    expect(screen.getAllByText(post.meta)).toHaveLength(BLOG_POSTS.length)
  })
})
