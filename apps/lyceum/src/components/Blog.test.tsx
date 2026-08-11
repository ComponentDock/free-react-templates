import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blogHeading, blogLabel, blogParagraph, blogPosts } from '../data'

describe('Blog', () => {
  it('renders the section title and four post cards', () => {
    const { container } = render(<Blog />)

    expect(screen.getByRole('region', { name: blogLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: blogHeading })).toBeInTheDocument()
    expect(screen.getByText(blogParagraph)).toBeInTheDocument()

    expect(container.querySelectorAll('img')).toHaveLength(blogPosts.length)
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(`${post.date} | By ${post.author}`)).toBeInTheDocument()
      expect(screen.getAllByText(post.snippet)).toHaveLength(blogPosts.length)
    }
  })
})
