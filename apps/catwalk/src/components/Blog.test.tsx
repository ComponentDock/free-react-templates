import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and at least three post cards with date, author, and comments', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Case Study' })).toBeInTheDocument()
    expect(screen.getByText('Our latest update')).toBeInTheDocument()

    const articles = screen.getAllByRole('article')
    expect(articles.length).toBeGreaterThanOrEqual(3)
    for (const article of articles) {
      expect(within(article).getByText(/sept\. \d{1,2}, 2019/)).toBeInTheDocument()
      expect(within(article).getByText(/Admin/)).toBeInTheDocument()
      expect(within(article).getByText(/\d+ comments/)).toBeInTheDocument()
    }
  })

  it('includes the original first post title', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: 'The Most Attractive Persons of the Hollywood' }),
    ).toBeInTheDocument()
  })
})
