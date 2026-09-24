import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrendingNow } from './TrendingNow'
import { trendingTitle, trendingFeatured, trendingArticles, viewAllLabel } from '../data'

describe('TrendingNow', () => {
  it('renders the section heading and View All link', () => {
    render(<TrendingNow />)
    expect(screen.getByRole('heading', { name: trendingTitle })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: viewAllLabel })).toBeInTheDocument()
  })

  it('renders the featured trending card', () => {
    render(<TrendingNow />)
    expect(screen.getByText(trendingFeatured.title)).toBeInTheDocument()
    expect(screen.getByText(trendingFeatured.date)).toBeInTheDocument()
  })

  it('renders all 5 trending article cards', () => {
    render(<TrendingNow />)
    for (const article of trendingArticles) {
      expect(screen.getByText(article.title)).toBeInTheDocument()
    }
  })
})
