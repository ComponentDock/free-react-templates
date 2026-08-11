import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogGrid } from './BlogGrid'
import { blogPosts, currentPage, paginationPages } from '../data'

describe('BlogGrid', () => {
  it('renders standard post cards with image, date, title, excerpt, tags and author', () => {
    render(<BlogGrid />)
    const standard = blogPosts.filter((post) => post.kind === 'standard')
    for (const post of standard) {
      const card = screen.getByRole('heading', { level: 3, name: post.title }).closest('article')!
      expect(within(card).getByText(post.date!)).toBeInTheDocument()
      expect(within(card).getByText(post.excerpt!)).toBeInTheDocument()
      for (const tag of post.tags!) {
        expect(within(card).getByText(tag)).toBeInTheDocument()
      }
      expect(within(card).getByText(post.author!)).toBeInTheDocument()
      expect(
        card.querySelector('img')?.getAttribute('src')?.includes(`/seed/${post.seed}/`),
      ).toBe(true)
    }
  })

  it('renders one quote card with the quotation and its attribution', () => {
    render(<BlogGrid />)
    const quote = blogPosts.find((post) => post.kind === 'quote')!
    const blockquote = screen.getByRole('blockquote')
    expect(within(blockquote).getByText(quote.quote!)).toBeInTheDocument()
    expect(within(blockquote).getByText(quote.attribution!)).toBeInTheDocument()
  })

  it('renders pagination with Prev, pages 1-5, the current page highlighted, and Next', () => {
    render(<BlogGrid />)
    const pagination = screen.getByRole('navigation', { name: 'Pagination' })
    expect(within(pagination).getByRole('link', { name: 'Prev' })).toBeInTheDocument()
    expect(within(pagination).getByRole('link', { name: 'Next' })).toBeInTheDocument()
    for (const page of paginationPages) {
      expect(within(pagination).getByRole('link', { name: page })).toBeInTheDocument()
    }
    expect(within(pagination).getByRole('link', { name: currentPage })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })
})
