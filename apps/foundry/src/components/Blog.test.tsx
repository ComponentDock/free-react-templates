import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading, post cards, and View All Blog Post button', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: /Read Our Blog/ })).toBeInTheDocument()
    const articles = screen.getAllByRole('article')
    expect(articles.length).toBeGreaterThanOrEqual(3)
    expect(within(articles[0]!).getByRole('heading', { level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View All Blog Post/ })).toBeInTheDocument()
  })
})
