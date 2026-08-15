import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { News } from './News'
import { newsItems } from '../data'

describe('News', () => {
  it('renders the heading and three news cards with meta, title and excerpt', () => {
    render(<News />)
    expect(screen.getByRole('heading', { level: 2, name: 'News & Events' })).toBeInTheDocument()
    expect(newsItems).toHaveLength(3)
    for (const item of newsItems) {
      expect(screen.getAllByText(item.meta).length).toBeGreaterThan(0)
      expect(screen.getAllByRole('heading', { level: 3, name: item.title })).toHaveLength(3)
      expect(screen.getAllByText(item.excerpt).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByAltText('Popular Real Estate Properties for 2019')).toHaveLength(3)
  })
})
