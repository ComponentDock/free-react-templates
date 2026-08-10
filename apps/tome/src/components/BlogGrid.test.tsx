import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { BlogGrid } from './BlogGrid'
import { blogEntries } from '../data'

describe('BlogGrid', () => {
  it('renders every blog entry with image, meta line, heading and excerpt', () => {
    render(<BlogGrid />)

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(blogEntries.length)

    blogEntries.forEach((entry, i) => {
      const article = within(articles[i]!)
      expect(article.getByRole('heading', { level: 3, name: entry.heading })).toBeInTheDocument()
      expect(article.getByAltText(entry.heading)).toHaveAttribute(
        'src',
        expect.stringContaining(entry.seed),
      )
      expect(article.getByText(entry.date)).toBeInTheDocument()
      expect(article.getByText(entry.author)).toBeInTheDocument()
      expect(article.getByText(entry.excerpt)).toBeInTheDocument()
    })
  })

  it('renders the entries inside a two-column grid', () => {
    const { container } = render(<BlogGrid />)

    expect(container.querySelectorAll('article')).toHaveLength(blogEntries.length)
    expect(container.querySelector('section')).toHaveClass('sm:grid-cols-2')
  })
})
