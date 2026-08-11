import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { LatestNews } from './LatestNews'
import { latestNews, latestNewsHeading, latestNewsSectionLabel } from '../data'

describe('LatestNews', () => {
  it('renders the heading and every news row with category, title and meta', () => {
    render(<LatestNews />)
    const section = screen.getByRole('region', { name: latestNewsSectionLabel })
    expect(within(section).getByRole('heading', { name: latestNewsHeading })).toBeInTheDocument()
    for (const post of latestNews) {
      expect(within(section).getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(within(section).getAllByText(post.category).length).toBeGreaterThan(0)
      expect(within(section).getAllByText(post.meta.comments).length).toBeGreaterThan(0)
      expect(within(section).getAllByText(post.meta.views).length).toBeGreaterThan(0)
      expect(within(section).getAllByText(post.meta.likes).length).toBeGreaterThan(0)
    }
  })
})
