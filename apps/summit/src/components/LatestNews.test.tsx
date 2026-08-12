import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NEWS } from '../data'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders three distinct blog cards with title, meta and excerpt', () => {
    render(<LatestNews />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Latest News' })).toBeInTheDocument()
    for (const post of NEWS) {
      expect(screen.getByRole('heading', { level: 6, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getByText(post.author)).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Read More/i })).toHaveLength(NEWS.length)
  })
})
