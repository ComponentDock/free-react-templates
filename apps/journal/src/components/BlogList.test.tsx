import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { blogPosts, loadMoreLabel } from '../data'
import { BlogList } from './BlogList'

describe('BlogList', () => {
  it('renders five posts with date box, tag, headline, excerpt and meta', () => {
    render(<BlogList />)

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(blogPosts.length)

    for (const post of blogPosts) {
      const article = screen.getByRole('article', {
        name: new RegExp(post.title),
      })
      expect(within(article).getByText(post.day)).toBeInTheDocument()
      expect(within(article).getByText(post.month)).toBeInTheDocument()
      expect(within(article).getByText(post.tag)).toBeInTheDocument()
      expect(
        within(article).getByRole('heading', { level: 3, name: post.title }),
      ).toBeInTheDocument()
      expect(within(article).getByText(post.excerpt)).toBeInTheDocument()
      expect(within(article).getByText(`By ${post.author}`)).toBeInTheDocument()
      expect(within(article).getByText(post.comments)).toBeInTheDocument()
    }
  })

  it('alternates the image side and spans the third post full-width', () => {
    render(<BlogList />)

    const first = screen.getByRole('article', { name: /Party people in the house/ })
    const second = screen.getByRole('article', { name: /We love colors in 2018/ })
    const third = screen.getByRole('article', { name: /10 Tips to organize the perfect party/ })

    expect(first.className).toContain('md:flex-row')
    expect(second.className).toContain('md:flex-row-reverse')
    expect(third.className).not.toContain('md:flex-row-reverse')
    expect(third.className).toContain('flex-col')
  })

  it('renders a centered Read More button below the posts', () => {
    render(<BlogList />)

    const button = screen.getByRole('button', { name: loadMoreLabel })
    expect(button).toBeInTheDocument()
  })
})
