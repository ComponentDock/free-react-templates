import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Banner } from './Banner'
import { bannerPosts } from '../data'

describe('Banner', () => {
  it('renders three banner posts with category, title and date', () => {
    render(<Banner />)

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(bannerPosts.length)

    bannerPosts.forEach((post, i) => {
      const article = within(articles[i]!)
      expect(article.getByText(post.category)).toBeInTheDocument()
      expect(article.getByRole('heading', { level: 2, name: post.title })).toBeInTheDocument()
      expect(article.getByText(post.date)).toBeInTheDocument()
      expect(article.getByAltText(post.title)).toHaveAttribute(
        'src',
        expect.stringContaining(post.seed),
      )
    })
  })
})
