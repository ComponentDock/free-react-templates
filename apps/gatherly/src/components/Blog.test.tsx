import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blog } from '../data'

describe('Blog', () => {
  it('renders the heading and three post cards with meta, title and excerpt', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: blog.heading })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    blog.posts.forEach((post, index) => {
      const card = cards[index]!
      expect(within(card).getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(within(card).getByRole('link', { name: post.title })).toHaveAttribute(
        'href',
        '#blog-section',
      )
      expect(within(card).getByText(post.excerpt)).toBeInTheDocument()
      expect(within(card).getByText(new RegExp(post.date))).toBeInTheDocument()
      expect(within(card).getByText(`${post.comments} Comments`)).toBeInTheDocument()
    })
  })
})
