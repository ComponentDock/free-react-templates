import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedPosts } from './FeaturedPosts'

describe('FeaturedPosts', () => {
  it('renders the main featured post', () => {
    render(<FeaturedPosts />)
    expect(screen.getByText(/Financial news/)).toBeInTheDocument()
  })

  it('renders the author name', () => {
    render(<FeaturedPosts />)
    expect(screen.getByText('Christinne Williams')).toBeInTheDocument()
  })

  it('renders category badges', () => {
    render(<FeaturedPosts />)
    const badges = screen.getAllByText('Finance')
    expect(badges.length).toBeGreaterThanOrEqual(1)
  })

  it('renders like and comment counts', () => {
    render(<FeaturedPosts />)
    const likes = screen.getAllByText('392')
    expect(likes.length).toBeGreaterThanOrEqual(1)
    const comments = screen.getAllByText('10')
    expect(comments.length).toBeGreaterThanOrEqual(1)
  })

  it('renders small sidebar posts', () => {
    render(<FeaturedPosts />)
    const posts = screen.getAllByText(/Pellentesque mattis arcu massa/)
    expect(posts.length).toBeGreaterThanOrEqual(1)
  })
})
