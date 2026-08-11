import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogList } from './BlogList'
import { featuredPost, loadMoreLabel, posts, readMoreLabel } from '../data'

describe('BlogList', () => {
  it('renders the featured post with category, date, headline, excerpt, and read-more', () => {
    render(<BlogList />)

    const featured = screen
      .getAllByRole('article')
      .find((article) => within(article).queryByText(featuredPost.title) !== null)

    expect(featured).toBeDefined()
    expect(within(featured as HTMLElement).getByText(featuredPost.category)).toBeInTheDocument()
    expect(within(featured as HTMLElement).getByText(featuredPost.date)).toBeInTheDocument()
    expect(
      within(featured as HTMLElement).getByRole('heading', {
        level: 2,
        name: featuredPost.title,
      }),
    ).toBeInTheDocument()
    expect(within(featured as HTMLElement).getByText(featuredPost.excerpt)).toBeInTheDocument()
    expect(
      within(featured as HTMLElement).getByRole('link', { name: readMoreLabel }),
    ).toBeInTheDocument()
  })

  it('renders every regular post with a title, category, and date', () => {
    const { container } = render(<BlogList />)

    const articles = Array.from(container.querySelectorAll('article')).slice(1)
    expect(articles).toHaveLength(posts.length)

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i] as (typeof posts)[number]
      const article = articles[i] as HTMLElement
      expect(
        within(article).getByRole('heading', { level: 2, name: post.title }),
      ).toBeInTheDocument()
      expect(within(article).getByText(post.category)).toBeInTheDocument()
      expect(within(article).getByText(post.date)).toBeInTheDocument()
    }
  })

  it('renders the load-more label below the posts', () => {
    render(<BlogList />)

    expect(screen.getByRole('link', { name: loadMoreLabel })).toBeInTheDocument()
  })
})
