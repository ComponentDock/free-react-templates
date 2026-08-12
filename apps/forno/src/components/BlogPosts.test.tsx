import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders three post cards with date, title, excerpt and read-more link', () => {
    render(<BlogPosts />)

    expect(screen.getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()

    for (const title of [
      'Taste the delicious foods in Asia',
      'Behind the scenes of our pastry kitchen',
      'Wine pairings for a summer menu',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByText(/May 14, 2026|April 28, 2026|April 9, 2026/)).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(3)
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })
})
