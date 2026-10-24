import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'
import { posts } from '../data'

describe('News', () => {
  it('renders three post cards with titles and dates', () => {
    render(<News />)
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
    for (const post of posts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('July 26, 2026')).toHaveLength(3)
  })

  it('renders an excerpt and a read-more link per post', () => {
    render(<News />)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
    expect(screen.getByText(/a morning with the water team/i)).toBeInTheDocument()
  })
})
