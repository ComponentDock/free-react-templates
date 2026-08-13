import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { News } from './News'
import { news } from '../data'

describe('News', () => {
  it('renders the section heading and subtitle', () => {
    render(<News />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Recent medical news' }),
    ).toBeInTheDocument()
  })

  it('renders three news cards with image, date badge, title link, copy and read more', () => {
    const { container } = render(<News />)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(news.length)
    for (const article of news) {
      expect(screen.getByText(article.date)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: article.title })).toBeInTheDocument()
    }
    // The source repeats the same Lorem copy on every card.
    expect(screen.getAllByText(news[0]!.copy)).toHaveLength(news.length)
    expect(screen.getAllByText(/read more/).length).toBe(news.length)
  })

  it('styles the date badge in brand blue overlapping the image', () => {
    const { container } = render(<News />)
    const badge = container.querySelector('span.bg-brand') as HTMLElement
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-brand')
    expect(badge).toHaveClass('top-[-25px]')
    expect(badge).toHaveClass('left-[30px]')
  })

  it('renders sliding-arrow read-more links', () => {
    const { container } = render(<News />)
    const arrows = container.querySelectorAll('svg')
    expect(arrows.length).toBe(news.length)
    const readMore = screen.getAllByRole('link', { name: /read more/ })
    expect(readMore[0]).toHaveClass('hover:text-brand')
  })
})
