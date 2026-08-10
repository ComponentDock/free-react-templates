import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentPosts } from './RecentPosts'
import { recentPosts } from '../data'

describe('RecentPosts', () => {
  it('renders the Recent Posts heading followed by nine cards in a grid', () => {
    const { container } = render(<RecentPosts />)

    expect(screen.getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()
    // 9 card headlines + the section heading are all level-2 headings
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(10)
    expect(container.querySelectorAll('img')).toHaveLength(18) // 9 post + 9 avatar
  })

  it('shows a category pill, black headline, byline, excerpt and Read More per card', () => {
    render(<RecentPosts />)

    for (const post of recentPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getAllByText(post.categories[0]!.label).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText(/By Carrol Atkinson/)).toHaveLength(9)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(9)
  })

  it('renders the circular pagination inside the section', () => {
    render(<RecentPosts />)

    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument()
  })
})
