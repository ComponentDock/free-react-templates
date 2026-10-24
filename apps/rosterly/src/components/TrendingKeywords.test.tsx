import { render, screen } from '@testing-library/react'
import { TrendingKeywords } from './TrendingKeywords'

describe('TrendingKeywords', () => {
  it('renders heading', () => {
    render(<TrendingKeywords />)
    expect(screen.getByText('Trending Keywords:')).toBeInTheDocument()
  })

  it('renders all keyword tags', () => {
    render(<TrendingKeywords />)
    const keywords = ['UI Designer', 'Python', 'Developer', 'Web Design', 'Graphic Design']
    for (const kw of keywords) {
      expect(screen.getByText(kw)).toBeInTheDocument()
    }
  })

  it('renders tags as links', () => {
    render(<TrendingKeywords />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(5)
  })
})
