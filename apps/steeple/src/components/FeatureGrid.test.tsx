import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeatureGrid } from './FeatureGrid'

describe('FeatureGrid', () => {
  it('shows four items titled Our Mission, Testimonies, Listen To Our Sermons and Join Our Church', () => {
    render(<FeatureGrid />)
    for (const title of [
      'Our Mission',
      'Testimonies',
      'Listen To Our Sermons',
      'Join Our Church',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows an icon, a short paragraph and a Read More link for each item', () => {
    render(<FeatureGrid />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
    for (const article of articles) {
      expect(article.querySelector('svg')).toBeInTheDocument()
      expect(article.querySelector('p')).toBeInTheDocument()
      expect(article.querySelector('a[href="#about"]')).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /read more/i })).toHaveLength(4)
  })
})
