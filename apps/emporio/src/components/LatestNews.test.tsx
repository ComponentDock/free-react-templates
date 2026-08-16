import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'
import { blogPosts } from '../data'

describe('LatestNews', () => {
  it('renders three blog cards with tags, titles, excerpts and Read More buttons', () => {
    render(<LatestNews />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getAllByText('Fashion Tips')).toHaveLength(3)
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: post.alt })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })
})
