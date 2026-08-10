import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PopularPosts } from './PopularPosts'
import { popularPosts } from '../data'

describe('PopularPosts', () => {
  it('renders the section title and seven thumbnail post rows', () => {
    const { container } = render(<PopularPosts />)

    expect(screen.getByRole('heading', { name: 'Popular Posts to Remember' })).toBeInTheDocument()
    for (const post of popularPosts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(popularPosts[0]!.date)).toHaveLength(1)
    expect(container.querySelectorAll('img')).toHaveLength(popularPosts.length)
  })
})
