import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogPosts } from './BlogPosts'
import { featuredPosts, gridPosts, posts, splitPost } from '../data'

describe('BlogPosts', () => {
  it('renders all seven post titles in order', () => {
    render(<BlogPosts />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.map((heading) => heading.textContent)).toEqual(
      posts.map((post) => post.title),
    )
  })

  it('renders two full-width feature cards, four grid cards and one split card', () => {
    render(<BlogPosts />)
    for (const post of featuredPosts) {
      const article = screen.getByRole('heading', { level: 3, name: post.title }).closest(
        'article',
      )
      expect(article).toHaveClass('w-full')
    }
    for (const post of gridPosts) {
      const article = screen.getByRole('heading', { level: 3, name: post.title }).closest(
        'article',
      )
      expect(article).toHaveClass('w-full')
      expect(article?.parentElement).toHaveClass('md:grid-cols-2')
    }
    const splitArticle = screen
      .getByRole('heading', { level: 3, name: splitPost.title })
      .closest('article')
    expect(splitArticle).toHaveClass('md:flex-row')
  })

  it('renders the category chip, share meta, date, excerpt and read-more link per post', () => {
    render(<BlogPosts />)
    expect(screen.getAllByText('Share')).toHaveLength(posts.length)
    expect(screen.getAllByRole('link', { name: 'READ MORE' })).toHaveLength(posts.length)
    expect(screen.getAllByText('Travel')).toHaveLength(posts.length)

    const first = featuredPosts[0]!
    const article = screen.getByRole('heading', { level: 3, name: first.title }).closest(
      'article',
    )!
    expect(within(article as HTMLElement).getByText(first.date)).toBeInTheDocument()
    expect(within(article as HTMLElement).getByText(first.excerpt)).toBeInTheDocument()
    expect(within(article as HTMLElement).getByText(first.comments)).toBeInTheDocument()
  })

  it('renders one placeholder photo per post plus the load-older control', () => {
    render(<BlogPosts />)
    expect(document.querySelectorAll('img')).toHaveLength(posts.length)
    expect(screen.getByRole('link', { name: 'LOAD OLDER POSTS' })).toHaveAttribute(
      'href',
      '#blog',
    )
  })
})
