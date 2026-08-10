import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders five article cards with photo, watermark, headline, excerpt, author and CTA', () => {
    render(<BlogSection />)

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(5)

    const first = articles[0]!
    expect(within(first).getByRole('img', { name: /South America/ })).toBeInTheDocument()
    expect(within(first).getByText('South America')).toBeInTheDocument()
    expect(within(first).getByText('Hawaii known as the Big Island')).toBeInTheDocument()
    expect(within(first).getByText(/Even the all-powerful Pointing/)).toBeInTheDocument()
    expect(within(first).getByText('Written by')).toBeInTheDocument()
    expect(within(first).getByText(/Dave Lewis/)).toBeInTheDocument()
    expect(within(first).getByRole('link', { name: /Continue Reading/ })).toBeInTheDocument()
  })

  it('shows the heart, eye and comment counters on each card', () => {
    render(<BlogSection />)

    const articles = screen.getAllByRole('article')
    const first = articles[0]!
    expect(within(first).getByText('3')).toBeInTheDocument()
    expect(within(first).getByText('100')).toBeInTheDocument()
    expect(within(first).getByText('5')).toBeInTheDocument()
    expect(within(first).getByLabelText('3 likes')).toBeInTheDocument()
    expect(within(first).getByLabelText('100 views')).toBeInTheDocument()
    expect(within(first).getByLabelText('5 comments')).toBeInTheDocument()
  })

  it('renders unique headlines per card', () => {
    render(<BlogSection />)
    const headlines = screen
      .getAllByRole('article')
      .map((article) => within(article).getByRole('heading', { level: 3 }).textContent)
    expect(new Set(headlines).size).toBe(5)
  })
})
