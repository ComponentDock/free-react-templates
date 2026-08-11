import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ArticleGrid } from './ArticleGrid'
import {
  articles,
  loadMoreLabel,
  playLabel,
  trendingFeatured,
  trendingSmall,
  trendingTitle,
  videoList,
  videosFeatured,
  videosTitle,
} from '../data'

describe('ArticleGrid', () => {
  it('renders the 3-up article card grid with category, title and meta counts', () => {
    render(<ArticleGrid />)
    for (const article of articles) {
      expect(screen.getByRole('heading', { name: article.title })).toBeInTheDocument()
      expect(screen.getAllByText(article.category).length).toBeGreaterThanOrEqual(1)
      expect(screen.getByText(String(article.likes))).toBeInTheDocument()
      expect(screen.getAllByText(String(article.comments)).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the Whats trending block with a featured split card and small cards', () => {
    render(<ArticleGrid />)
    expect(screen.getByRole('heading', { name: trendingTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: trendingFeatured.title })).toBeInTheDocument()
    expect(screen.getByText(String(trendingFeatured.likes))).toBeInTheDocument()
    for (const item of trendingSmall) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getAllByText(item.category).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the Most Popular Videos block with play buttons on every video card', () => {
    render(<ArticleGrid />)
    expect(screen.getByRole('heading', { name: videosTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: videosFeatured.title })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: playLabel(videosFeatured.title) })).toBeInTheDocument()
    for (const item of videoList) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: playLabel(item.title) })).toBeInTheDocument()
    }
  })

  it('renders a centered LOAD MORE outline button', () => {
    render(<ArticleGrid />)
    expect(screen.getByRole('link', { name: loadMoreLabel })).toBeInTheDocument()
  })

  it('renders every card as an article landmark', () => {
    render(<ArticleGrid />)
    const expected = articles.length + trendingSmall.length + videoList.length
    expect(screen.getAllByRole('article')).toHaveLength(expected)
  })
})
