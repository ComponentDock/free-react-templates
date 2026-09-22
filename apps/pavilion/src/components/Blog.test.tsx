import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Our Blog/i })).toBeInTheDocument()
  })

  it('renders 3 blog cards', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('renders article titles', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: /Hotel amenities you must have/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Amazing travel experiences/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Best hotel for vacation/i })).toBeInTheDocument()
  })

  it('renders 3 news tags on blog cards', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    for (const article of articles) {
      expect(article).toHaveTextContent(/news/i)
    }
  })
})
