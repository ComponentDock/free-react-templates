import { fireEvent, render, screen } from '@testing-library/react'
import { BlogPosts } from './BlogPosts'
import { BLOG_POSTS } from '../data'
import { describe, expect, it } from 'vitest'

describe('BlogPosts', () => {
  it('renders the heading and all post cards with links', () => {
    render(<BlogPosts />)
    expect(screen.getByRole('heading', { name: /Blog Posts/ })).toBeInTheDocument()
    const titles = screen.getAllByRole('heading', { level: 3, hidden: true })
    expect(titles).toHaveLength(BLOG_POSTS.length)
    for (const post of BLOG_POSTS) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
    const readMore = screen.getAllByRole('link', { name: 'Read More', hidden: true })
    expect(readMore).toHaveLength(BLOG_POSTS.length)
  })

  it('masks off-window cards and advances with the controls', () => {
    render(<BlogPosts />)
    const articles = document.querySelectorAll('article')
    expect(articles[0]).not.toHaveAttribute('aria-hidden')
    expect(articles[3]).toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Next posts' }))
    expect(articles[0]).toHaveAttribute('aria-hidden', 'true')
    expect(articles[3]).not.toHaveAttribute('aria-hidden')

    fireEvent.click(screen.getByRole('button', { name: 'Previous posts' }))
    expect(articles[0]).not.toHaveAttribute('aria-hidden')
  })

  it('wraps around at the end of the carousel', () => {
    render(<BlogPosts />)
    const next = screen.getByRole('button', { name: 'Next posts' })
    const articles = document.querySelectorAll('article')
    fireEvent.click(next)
    fireEvent.click(next)
    fireEvent.click(next)
    expect(articles[0]).not.toHaveAttribute('aria-hidden')
  })

  it('makes every card image lazy-loaded with an empty alt', () => {
    render(<BlogPosts />)
    const imgs = document.querySelectorAll('article img')
    expect(imgs).toHaveLength(BLOG_POSTS.length)
    for (const img of imgs) {
      expect(img).toHaveAttribute('loading', 'lazy')
      expect(img).toHaveAttribute('alt', '')
    }
  })
})
