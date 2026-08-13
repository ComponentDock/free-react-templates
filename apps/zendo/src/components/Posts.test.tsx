import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Posts } from './Posts'
import { posts } from '../data'

describe('Posts', () => {
  it('renders three blog cards with meta, title, excerpt and read-more link', () => {
    render(<Posts />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Posts' })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(posts.length)
    for (const [index, post] of posts.entries()) {
      const card = cards[index]!
      expect(within(card).getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(within(card).getByText(post.excerpt)).toBeInTheDocument()
      expect(within(card).getByText(/july\. 14, 2019/i)).toBeInTheDocument()
      expect(within(card).getByText(/3 comments/i)).toBeInTheDocument()
      expect(within(card).getByRole('link', { name: 'Read more' })).toBeInTheDocument()
      expect(within(card).getByRole('img', { name: post.title })).toHaveAttribute('src', post.image)
    }
  })
})
