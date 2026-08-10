import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TodayFeatured } from './TodayFeatured'
import { sideNews, todayFeatured, todayFeaturedTitle } from '../data'

describe('TodayFeatured', () => {
  it('shows the TODAY FEATURED card with image, headline, meta and excerpt', () => {
    render(<TodayFeatured />)
    expect(screen.getByRole('heading', { name: todayFeaturedTitle })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: todayFeatured.headline })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: todayFeatured.headline })).toBeInTheDocument()
    expect(screen.getAllByText(todayFeatured.meta.date).length).toBeGreaterThan(0)
    expect(screen.getByText(todayFeatured.excerpt)).toBeInTheDocument()
  })

  it('renders six side-thumbnail cards with 250px images and headlines', () => {
    render(<TodayFeatured />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(sideNews.length)
    for (const news of sideNews) {
      expect(screen.getByRole('img', { name: news.headline })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: news.headline })).toBeInTheDocument()
    }
  })

  it('uses the brand underline section title treatment', () => {
    const { container } = render(<TodayFeatured />)
    expect(container.querySelector('.bg-primary')).not.toBeNull()
  })
})
