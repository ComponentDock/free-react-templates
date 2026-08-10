import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedGrid } from './FeaturedGrid'
import { featuredPosts } from '../data'

describe('FeaturedGrid', () => {
  it('renders exactly three vertical post cards with meta, headline and author', () => {
    render(<FeaturedGrid />)

    for (const post of featuredPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.author)).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
      for (const category of post.categories) {
        expect(screen.getByRole('link', { name: category })).toBeInTheDocument()
      }
    }
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
  })
})
