import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { BlogList } from './BlogList'
import { blogPosts, shareLinks } from '../data'

describe('BlogList', () => {
  it('renders three blog posts with date, title, tags, excerpt and footer', () => {
    render(<BlogList />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)

    blogPosts.forEach((post, index) => {
      const article = articles[index]!
      expect(within(article).getByText(post.date)).toBeInTheDocument()
      expect(within(article).getByRole('heading', { name: post.title })).toBeInTheDocument()
      for (const tag of post.tags) {
        expect(within(article).getByRole('link', { name: tag })).toBeInTheDocument()
      }
      expect(within(article).getByText(post.excerpt)).toBeInTheDocument()
      expect(within(article).getByText(`${post.comments} Comments`)).toBeInTheDocument()
    })
  })

  it('renders a share row with five social icons per post', () => {
    render(<BlogList />)
    for (const post of blogPosts) {
      const list = screen.getByRole('list', { name: `Share ${post.title}` })
      expect(list.children.length).toBe(shareLinks.length)
    }
  })

  it('renders a Read more button per post', () => {
    render(<BlogList />)
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(blogPosts.length)
  })
})
