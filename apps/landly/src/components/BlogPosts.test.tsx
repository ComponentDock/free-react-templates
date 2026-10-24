import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogPosts } from './BlogPosts'
import { blogHeading, posts } from '../data'

describe('BlogPosts', () => {
  it('renders the light band heading and three post cards', () => {
    const { container } = render(<BlogPosts />)
    expect(screen.getByRole('heading', { level: 2, name: blogHeading })).toBeInTheDocument()
    expect(container.querySelector('section')).toHaveClass('bg-light')
    expect(screen.getAllByRole('heading', { name: posts[0]!.title })).toHaveLength(posts.length)
  })

  it('renders the reference meta line and excerpt on every post', () => {
    render(<BlogPosts />)
    expect(screen.getAllByText('July 17, 2019 by Admin')).toHaveLength(posts.length)
    for (const post of new Set(posts.map((item) => item.excerpt))) {
      expect(screen.getAllByText(post)).toHaveLength(posts.length)
    }
    expect(screen.getAllByAltText(posts[0]!.title)).toHaveLength(posts.length)
  })
})
