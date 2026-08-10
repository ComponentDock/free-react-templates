import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { BlogList } from './BlogList'

describe('BlogList', () => {
  it('renders four blog entries with categories, titles and distinct dates', () => {
    render(<BlogList />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)

    expect(within(articles[0]!).getByRole('link', { name: 'Health' })).toBeInTheDocument()
    expect(within(articles[0]!).getByRole('link', { name: 'Workout' })).toBeInTheDocument()
    expect(within(articles[0]!).getAllByText('|').length).toBeGreaterThanOrEqual(2)

    expect(
      within(articles[0]!).getByRole('heading', {
        name: 'The Most Popular Leg Workout for Women',
      }),
    ).toBeInTheDocument()

    const dates = articles.map(
      (article) => within(article).getByText(/January \d+, 2017/).textContent,
    )
    expect(new Set(dates).size).toBe(4)
  })

  it('shows a two-image gallery carousel on the first entry', () => {
    render(<BlogList />)
    const article = screen.getAllByRole('article')[0]!
    const image = article.querySelector('img')!
    expect(image.getAttribute('src')).toContain('feature-blog-1a')

    fireEvent.click(within(article).getByRole('button', { name: 'Next image' }))
    expect(image.getAttribute('src')).toContain('feature-blog-1b')

    fireEvent.click(within(article).getByRole('button', { name: 'Previous image' }))
    expect(image.getAttribute('src')).toContain('feature-blog-1a')
  })

  it('renders a video placeholder with a play button on the last entry', () => {
    render(<BlogList />)
    const article = screen.getAllByRole('article')[3]!
    expect(within(article).getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('renders a vertical share rail with Share and three social links', () => {
    render(<BlogList />)
    const article = screen.getAllByRole('article')[0]!
    const share = within(article).getByRole('list', { name: 'Share' })
    const links = within(share).getAllByRole('link')
    expect(links).toHaveLength(4)
    expect(within(share).getByRole('link', { name: 'Share' })).toBeInTheDocument()
    expect(within(share).getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(within(share).getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(within(share).getByRole('link', { name: 'Google' })).toBeInTheDocument()
  })

  it('renders the meta row with date, author and comment count', () => {
    render(<BlogList />)
    const article = screen.getAllByRole('article')[0]!
    expect(within(article).getByText('January 21, 2017')).toBeInTheDocument()
    expect(within(article).getByText('By Stephy')).toBeInTheDocument()
    expect(within(article).getByText('5 Comments')).toBeInTheDocument()
  })

  it('renders the full article body with drop cap, blockquote and lists on entry one', () => {
    render(<BlogList />)
    const article = screen.getAllByRole('article')[0]!
    const bodyParagraph = article.querySelectorAll('p')[2]!
    expect(bodyParagraph.className).toContain('first-letter:')
    expect(article.querySelector('blockquote')).toBeInTheDocument()
    expect(within(article).getAllByRole('list')).toHaveLength(3)
  })

  it('renders a Continue Reading link on every entry', () => {
    render(<BlogList />)
    expect(screen.getAllByText('Continue Reading')).toHaveLength(4)
  })
})
