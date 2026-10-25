import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Articles } from './Articles'
import { articles } from '../data'

describe('Articles', () => {
  it('renders two distinct posts with h3 titles', () => {
    render(<Articles />)

    for (const article of articles) {
      const title = screen.getByRole('heading', { level: 3, name: article.title })
      expect(title).toHaveClass('text-[24px]', 'uppercase', 'text-body')
      expect(screen.getByRole('img', { name: article.title })).toHaveAttribute(
        'src',
        article.image,
      )
      expect(screen.getByText(article.date)).toBeInTheDocument()
      expect(screen.getByText(article.excerpt)).toBeInTheDocument()
    }

    expect(articles[0]!.title).not.toBe(articles[1]!.title)
    expect(articles[0]!.image).not.toBe(articles[1]!.image)
    expect(articles[0]!.date).not.toBe(articles[1]!.date)
  })

  it('links both titles and both read-more lines', () => {
    render(<Articles />)

    const links = screen.getAllByRole('link', { name: 'Read More' })
    expect(links).toHaveLength(2)
    expect(links[0]).toHaveClass('text-brand')

    const heading = screen.getByRole('heading', { level: 3, name: articles[0]!.title })
    const titleLink = within(heading).getByRole('link')
    expect(titleLink).toHaveAttribute('href', '#blog')
    expect(titleLink).toHaveClass('hover:text-brand')
  })

  it('uses a two-column grid on desktop', () => {
    const { container } = render(<Articles />)

    expect(container.querySelector('ul')).toHaveClass('lg:grid-cols-2')
  })
})
