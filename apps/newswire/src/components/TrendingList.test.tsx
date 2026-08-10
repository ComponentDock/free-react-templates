import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrendingList } from './TrendingList'
import { trendingPosts } from '../data'

describe('TrendingList', () => {
  it('renders the heading, numbered entries 01–04 and the See All Trends link', () => {
    render(<TrendingList />)

    expect(screen.getByRole('heading', { level: 2, name: 'Trending' })).toBeInTheDocument()

    for (let index = 1; index <= trendingPosts.length; index += 1) {
      expect(screen.getByText(String(index).padStart(2, '0'))).toBeInTheDocument()
    }
    for (const post of trendingPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }

    const more = screen.getByRole('link', { name: /See All Trends/ })
    expect(more).toHaveClass('text-accent')
  })
})
