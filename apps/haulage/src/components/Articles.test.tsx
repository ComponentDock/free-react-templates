import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Articles } from './Articles'
import { ARTICLES } from '../data'

describe('Articles', () => {
  it('renders both article entries with meta, title, excerpt and Read More links', () => {
    render(<Articles />)

    expect(screen.getByRole('heading', { level: 2, name: 'Articles' })).toBeInTheDocument()

    /* The source demo repeats the same meta line and excerpt in both
       cards — assert per article via scoped queries. */
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(ARTICLES.length)
    for (let index = 0; index < ARTICLES.length; index++) {
      const article = articles[index]!
      expect(within(article).getByText(ARTICLES[index]!.meta)).toBeInTheDocument()
      expect(within(article).getByRole('heading', { level: 3 })).toHaveTextContent(
        ARTICLES[index]!.title,
      )
      expect(within(article).getByText(ARTICLES[index]!.excerpt)).toBeInTheDocument()
      expect(within(article).getByRole('link', { name: /Read More/ })).toBeInTheDocument()
    }
  })
})
