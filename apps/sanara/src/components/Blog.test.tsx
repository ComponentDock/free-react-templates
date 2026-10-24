import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blogHeading, blogImageAlt, blogPosts } from '../data'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: blogHeading })).toBeInTheDocument()
  })

  it('renders two article cards with title, author and category', () => {
    render(<Blog />)

    expect(blogPosts).toHaveLength(2)
    // Both posts share the same title/author/category (faithful to the source).
    expect(screen.getAllByRole('heading', { level: 3, name: blogPosts[0]!.title })).toHaveLength(2)
    expect(screen.getAllByText(`${blogPosts[0]!.author} · ${blogPosts[0]!.category}`)).toHaveLength(
      2,
    )
    expect(screen.getByRole('img', { name: blogImageAlt(0) })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: blogImageAlt(1) })).toBeInTheDocument()
  })
})
