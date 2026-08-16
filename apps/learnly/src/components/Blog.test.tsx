import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blogPosts, sectionHeadings } from '../data'

describe('Blog', () => {
  it('renders the Recent From Blog heading block on a light background', () => {
    const { container } = render(<Blog />)

    expect(screen.getByText(sectionHeadings.blogSub)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: sectionHeadings.blogTitle }),
    ).toBeInTheDocument()
    expect(container.querySelector('section')!.className).toContain('bg-surface')
  })

  it('renders three article cards with image, meta, heading and excerpt', () => {
    render(<Blog />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(blogPosts.length)
    for (const post of blogPosts) {
      expect(screen.getByRole('link', { name: `Read article: ${post.title}` })).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getAllByText(post.excerpt).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText(/Admin/)).toHaveLength(blogPosts.length)
    expect(screen.getAllByText(/Oct\. 15, 2030/)).toHaveLength(blogPosts.length)
    expect(screen.getAllByText(/3 Comments/)).toHaveLength(blogPosts.length)
  })
})
