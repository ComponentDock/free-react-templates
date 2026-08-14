import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { BLOG_POSTS } from '../data'

describe('Blog', () => {
  it('renders the heading with three blog cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(BLOG_POSTS.length)

    BLOG_POSTS.forEach((post) => {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    })
  })

  it('renders the meta row with date, Admin and comment count', () => {
    render(<Blog />)

    const first = BLOG_POSTS[0]!
    expect(
      screen.getByText(new RegExp(`${first.month} ${first.day}, ${first.year}`)),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Admin')).toHaveLength(BLOG_POSTS.length)
    expect(screen.getByText(new RegExp(`${first.comments} Comments`))).toBeInTheDocument()
  })

  it('renders an image per post', () => {
    const { container } = render(<Blog />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(BLOG_POSTS.length)
    expect(images[0]).toHaveAttribute('src', BLOG_POSTS[0]!.image)
  })
})
