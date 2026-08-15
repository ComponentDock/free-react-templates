import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the heading and three blog entries with meta, title, blurb and Continue Reading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getAllByText(blogPosts[0]!.title)).toHaveLength(3)
    expect(screen.getAllByText(blogPosts[0]!.blurb)).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Continue Reading' })).toHaveLength(3)
  })
})
