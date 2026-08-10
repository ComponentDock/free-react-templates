import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { featuredPosts } from '../data'

describe('Hero', () => {
  it('renders four featured cards with pill, headline, excerpt and meta', () => {
    const { container } = render(<Hero />)

    const first = featuredPosts[0]!
    expect(screen.getByRole('link', { name: first.category })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: first.headline })).toBeInTheDocument()
    expect(screen.getByText(first.excerpt)).toBeInTheDocument()
    expect(screen.getByText(first.date)).toBeInTheDocument()
    expect(screen.getByText(first.comments)).toBeInTheDocument()

    for (const post of featuredPosts) {
      expect(screen.getByRole('heading', { name: post.headline })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('article')).toHaveLength(featuredPosts.length)
    expect(container.querySelectorAll('img')).toHaveLength(featuredPosts.length)
  })
})
