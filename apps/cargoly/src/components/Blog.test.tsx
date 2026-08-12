import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Blog } from './Blog'
import { BLOG_POSTS, BLOG_TITLE } from '../data'

describe('Blog', () => {
  it('renders the heading and three blog cards with date blocks and meta', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: BLOG_TITLE })).toBeInTheDocument()
    for (const post of BLOG_POSTS) {
      const heading = screen.getByRole('heading', { name: post.title })
      const card = heading.closest('article')!
      expect(screen.getByAltText(post.title)).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/${post.seed}/370/230`,
      )
      expect(within(card).getByText(post.month)).toBeInTheDocument()
      expect(within(card).getByText(post.year)).toBeInTheDocument()
      expect(within(card).getByText(post.excerpt)).toBeInTheDocument()
      expect(within(card).getByText(`${post.likes} Likes`)).toBeInTheDocument()
    }
    expect(screen.getByText('1 Comment')).toBeInTheDocument()
    expect(screen.getByText('3 Comments')).toBeInTheDocument()
    expect(screen.getByText('5 Comments')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /read more/ })).toHaveLength(3)
  })
})
