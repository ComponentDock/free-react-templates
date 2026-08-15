import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { blogPosts, blogSectionTitle } from '../data'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and every blog card with its date block and title', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: blogSectionTitle })).toBeInTheDocument()

    for (const post of blogPosts) {
      const card = screen
        .getByRole('heading', { level: 3, name: post.title })
        .closest('article') as HTMLElement
      expect(card).toBeInTheDocument()
      expect(card).toHaveTextContent(post.day)
      expect(card).toHaveTextContent(post.month)
      expect(card).toHaveTextContent(post.year)
      expect(card.querySelector('img')).toHaveAttribute('src', post.image)
    }
  })
})
