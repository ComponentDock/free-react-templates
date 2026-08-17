import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { BLOG_POSTS } from '../data'

describe('Blog', () => {
  it('renders the section headings and all four blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(BLOG_POSTS.length)
    expect(
      screen.getAllByRole('link', { name: 'Far far away, behind the word mountains' }),
    ).toHaveLength(BLOG_POSTS.length)
    expect(screen.getAllByText('Aug 20, 2020')).toHaveLength(BLOG_POSTS.length)
    expect(screen.getAllByRole('link', { name: /Read more/ })).toHaveLength(BLOG_POSTS.length)
  })

  it('links the read-more controls to the blog section', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: /Read more/ })
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#blog')
    }
  })
})
