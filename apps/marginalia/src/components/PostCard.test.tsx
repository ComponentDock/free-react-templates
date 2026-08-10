import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PostCard } from './PostCard'
import { blogPosts } from '../data'

const post = blogPosts[0]!

describe('PostCard', () => {
  it('renders the meta row, title, excerpt, tags and comments count', () => {
    const { container } = render(<PostCard post={post} />)
    expect(screen.getByText(new RegExp(`by ${post.author}`))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(post.date))).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: post.title })).toBeInTheDocument()
    expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    expect(screen.getByText(post.tags.join(', '))).toBeInTheDocument()
    expect(screen.getByText(String(post.comments))).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      `https://picsum.photos/seed/${post.seed}/800/600`,
    )
  })

  it('places the photo on the left by default', () => {
    const { container } = render(<PostCard post={post} />)
    const imageWrapper = container.querySelector('img')?.parentElement
    expect(imageWrapper?.className).not.toContain('md:order-2')
  })

  it('mirrors the layout when reversed', () => {
    const { container } = render(<PostCard post={post} reversed />)
    const imageWrapper = container.querySelector('img')?.parentElement
    expect(imageWrapper?.className).toContain('md:order-2')
  })
})
