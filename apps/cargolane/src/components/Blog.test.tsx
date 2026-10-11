import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BLOG_POSTS } from '../data/content'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders three blog cards with image, meta, title, and excerpt', () => {
    const { container } = render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()
    expect(screen.getByText('See our daily news & updates.')).toBeInTheDocument()
    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(`${post.date} · ${post.category}`)).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(3)
    for (const image of images) {
      expect(image.getAttribute('src')).toContain('picsum.photos/seed/cargolane-blog-')
    }
  })

  it('offers a centered View All Blog Posts button', () => {
    render(<Blog />)
    expect(screen.getByRole('link', { name: 'View All Blog Posts' })).toHaveAttribute(
      'href',
      '#blog',
    )
  })
})
