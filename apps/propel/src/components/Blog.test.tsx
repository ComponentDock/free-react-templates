import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { BLOG } from '../data'

describe('Blog', () => {
  it('renders the heading and four posts with titles, meta and images', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /Blog Posts/ })).toBeInTheDocument()
    expect(screen.getByText(BLOG.lead)).toBeInTheDocument()

    for (const post of BLOG.posts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(`by ${post.author} • ${post.date}`)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: post.imageAlt })).toHaveAttribute('src', post.image)
    }
  })

  it('renders a Learn more link per post', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: 'Learn more' })
    expect(links).toHaveLength(BLOG.posts.length)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#contact')
    }
  })
})
