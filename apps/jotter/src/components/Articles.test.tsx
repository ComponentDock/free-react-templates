import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { ARTICLES } from '../data'
import { Articles } from './Articles'

describe('Articles', () => {
  it('shows the Articles heading with an intro paragraph', () => {
    render(<Articles />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Articles' })
    expect(heading).toHaveClass('font-heading')
    expect(
      screen.getByText(/in which roasted parts of sentences fly into your mouth\.$/),
    ).toBeInTheDocument()
  })

  it('renders all twelve article rows', () => {
    render(<Articles />)
    expect(screen.getAllByRole('article')).toHaveLength(ARTICLES.length)
    expect(ARTICLES).toHaveLength(12)
  })

  it('alternates the image side between rows', () => {
    render(<Articles />)

    const rows = screen.getAllByRole('article')
    const firstImageLink = within(rows[0]!).getAllByRole('link')[0]
    const secondImageLink = within(rows[1]!).getAllByRole('link')[0]

    expect(firstImageLink).not.toHaveClass('md:order-last')
    expect(secondImageLink).toHaveClass('md:order-last')
  })

  it('shows the category, title, blurb, author line and meta counts for each row', () => {
    render(<Articles />)

    const first = ARTICLES[0]!
    const row = screen.getAllByRole('article')[0]!

    expect(within(row).getByText(first.category)).toBeInTheDocument()
    const titleHeading = within(row).getByRole('heading', { level: 3 })
    expect(titleHeading.textContent).toBe(first.title)
    expect(within(row).getByText(first.blurb)).toBeInTheDocument()

    const authorBlock = within(row).getByText(/Written by/)
    expect(authorBlock).toHaveTextContent('Dave Lewis')
    expect(within(row).getByText(', Nov. 28, 2018')).toBeInTheDocument()

    expect(within(row).getByText('3')).toHaveTextContent('3')
    expect(within(row).getByText('100')).toHaveTextContent('100')
    expect(within(row).getByText('5')).toHaveTextContent('5')

    const continueLink = within(row).getByRole('link', { name: /Continue Reading/ })
    expect(continueLink.querySelector('svg.lucide-arrow-right')).toBeInTheDocument()
  })

  it('gives each article image a seeded picsum source and an alt text', () => {
    render(<Articles />)

    const row = screen.getAllByRole('article')[0]!
    const image = within(row).getByRole('img')
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/jotter-article-1/600/400')
    expect(image).toHaveAttribute('alt', ARTICLES[0]!.title)
  })
})
