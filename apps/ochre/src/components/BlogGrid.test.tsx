import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { BlogGrid } from './BlogGrid'
import { posts } from '../data'

describe('BlogGrid', () => {
  it('renders every post with category, title and date in a two-column grid', () => {
    const { container } = render(<BlogGrid />)

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(posts.length)
    expect(container.querySelector('section > div')).toHaveClass('sm:grid-cols-2')

    posts.forEach((post, i) => {
      const article = within(articles[i]!)
      expect(article.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(article.getByText(post.category)).toBeInTheDocument()
      expect(article.getByText(post.date)).toBeInTheDocument()
      expect(article.getByAltText(post.title)).toHaveAttribute(
        'src',
        expect.stringContaining(post.seed),
      )
    })
  })
})
