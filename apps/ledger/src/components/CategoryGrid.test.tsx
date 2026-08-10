import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { CategoryGrid } from './CategoryGrid'
import { categoryPosts } from '../data'

describe('CategoryGrid', () => {
  it('renders three category posts with white pill labels', () => {
    render(<CategoryGrid />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
    for (const [index, post] of categoryPosts.entries()) {
      expect(within(articles[index]!).getByText(post.pill)).toBeInTheDocument()
      expect(
        within(articles[index]!).getByRole('heading', { name: post.title }),
      ).toBeInTheDocument()
    }
    expect(screen.getAllByText('2 Comment')).toHaveLength(3)
  })
})
