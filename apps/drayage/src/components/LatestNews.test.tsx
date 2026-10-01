import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the centered eyebrow and navy heading', () => {
    render(<LatestNews />)
    expect(screen.getByText('Insight and Trends')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest news company')
  })

  it('renders three news cards with Guides chip, overlaid title, meta, excerpt, and Read More', () => {
    const { container } = render(<LatestNews />)
    const articles = container.querySelectorAll('article')
    expect(articles).toHaveLength(3)
    for (const article of articles) {
      expect(screen.getAllByText('Guides').length).toBe(3)
      expect(article.querySelector('img')).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/seed/drayage-news-'),
      )
      expect(article.querySelector('h3')).not.toBeNull()
      expect(article.textContent).toContain('by Ryan Casey')
      expect(article.querySelector('a')).toHaveTextContent('Read More')
    }
  })
})
