import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogSection } from './BlogSection'
import { posts, latestNews, latestComments, categories } from '../data'

describe('BlogSection', () => {
  it('renders the featured post and all regular posts', () => {
    render(<BlogSection />)
    // featured title is also reused by other posts — count all matches
    expect(
      screen.getAllByRole('heading', { name: 'The best games of 2019' }).length,
    ).toBeGreaterThan(1)
    expect(
      screen.getAllByRole('heading', { name: 'Tips to play a better game' }).length,
    ).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(posts.length)
    expect(screen.getAllByText('April 1, 2019').length).toBeGreaterThan(0)
  })

  it('renders the sidebar widgets in order', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: 'Categories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Comments' })).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByAltText('Advertisement')).toBeInTheDocument()
  })

  it('renders every category with its count badge', () => {
    render(<BlogSection />)
    for (const category of categories) {
      expect(screen.getAllByText(category.name).length).toBeGreaterThan(0)
      expect(screen.getByText(String(category.count))).toBeInTheDocument()
    }
  })

  it('renders latest news and latest comments items', () => {
    render(<BlogSection />)
    for (const item of latestNews) {
      expect(screen.getAllByText(item.title).length).toBeGreaterThan(0)
    }
    for (const comment of latestComments) {
      expect(screen.getByText(comment.name)).toBeInTheDocument()
      expect(screen.getAllByText(comment.post).length).toBeGreaterThan(0)
    }
  })
})
