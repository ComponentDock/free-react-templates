import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PostCard } from './PostCard'
import { posts } from '../data'

describe('PostCard', () => {
  it('renders a standard post card with image, category, title, date, excerpt, share row and Read More', () => {
    const post = posts[0]!
    render(<PostCard post={post} />)
    expect(screen.getByRole('img', { name: post.title })).toBeInTheDocument()
    expect(screen.getByText(post.category)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    expect(screen.getByText(post.date)).toBeInTheDocument()
    expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    expect(screen.getByText('Share')).toBeInTheDocument()
    expect(screen.getByText(String(post.comments))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Share on Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
  })

  it('renders the side-by-side variant with the image on the left', () => {
    const post = posts[1]!
    expect(post.sideBySide).toBe(true)
    render(<PostCard post={post} />)
    expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: post.title })).toBeInTheDocument()
  })
})
