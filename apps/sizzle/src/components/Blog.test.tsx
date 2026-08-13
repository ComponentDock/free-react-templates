import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Latest From Our Blog')
  })

  it('renders all four blog cards with title, date, excerpt and meta', () => {
    render(<Blog />)
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
      expect(screen.getByText(post.likes)).toBeInTheDocument()
      expect(screen.getByText(post.comments)).toBeInTheDocument()
    }
  })
})
