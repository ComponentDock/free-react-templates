import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogPosts } from './BlogPosts'
import { BLOG_POSTS, BLOG_HEADING, BLOG_SUBTITLE } from '../data'

describe('BlogPosts', () => {
  it('renders the section heading', () => {
    render(<BlogPosts />)

    expect(screen.getByRole('heading', { level: 2, name: BLOG_HEADING })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<BlogPosts />)

    expect(screen.getByText(BLOG_SUBTITLE)).toBeInTheDocument()
  })

  it('renders all 3 blog post titles', () => {
    render(<BlogPosts />)

    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    }
  })

  it('renders all 3 blog post dates', () => {
    render(<BlogPosts />)

    for (const post of BLOG_POSTS) {
      expect(screen.getByText(new RegExp(post.date))).toBeInTheDocument()
    }
  })

  it('renders all 3 blog post descriptions', () => {
    render(<BlogPosts />)

    for (const post of BLOG_POSTS) {
      expect(screen.getByText(post.description)).toBeInTheDocument()
    }
  })

  it('renders blog post images with alt text', () => {
    render(<BlogPosts />)

    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('img', { name: post.title })).toHaveAttribute('src', post.image)
    }
  })

  it('renders comment counts', () => {
    render(<BlogPosts />)

    for (const post of BLOG_POSTS) {
      expect(screen.getByText(new RegExp(`${post.comments} Comments`))).toBeInTheDocument()
    }
  })
})
