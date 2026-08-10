import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogSection } from './BlogSection'
import { blogPosts, nextLabel, paginationPages, previousLabel } from '../data'

describe('BlogSection', () => {
  it('renders all six posts with pill, headline, excerpt and meta', () => {
    render(<BlogSection />)

    expect(screen.getByRole('region', { name: 'Blog posts' })).toBeInTheDocument()
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.headline })).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
      expect(screen.getAllByText(post.date).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.comments).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText(blogPosts[0]!.category).length).toBeGreaterThan(0)
  })

  it('renders numbered pagination with the active page in place', () => {
    render(<BlogSection />)

    const pagination = screen.getByRole('navigation', { name: 'Pagination' })
    expect(within(pagination).getByText(previousLabel)).toBeInTheDocument()
    expect(within(pagination).getByText(nextLabel)).toBeInTheDocument()
    for (const page of paginationPages) {
      expect(within(pagination).getByRole('link', { name: page })).toBeInTheDocument()
    }
    expect(within(pagination).getByRole('link', { name: '01' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })
})
