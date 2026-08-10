import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogFeed } from './BlogFeed'

describe('BlogFeed', () => {
  it('renders seven entries with meta, titles and learn-more links', () => {
    render(<BlogFeed />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(7)
    expect(screen.getByRole('link', { name: 'Writing A Novel with A Heart' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'The Stories Behind Old Portraits' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Learn More/ })).toHaveLength(7)
    expect(screen.getAllByText('Admin')).toHaveLength(7)
    expect(screen.getByText('Jan. 30, 2021')).toBeInTheDocument()
    expect(screen.getByText('3 Comments')).toBeInTheDocument()
  })

  it('alternates the image side on consecutive rows', () => {
    const { container } = render(<BlogFeed />)
    const sides = Array.from(container.querySelectorAll('article [data-side]')).map((el) =>
      el.getAttribute('data-side'),
    )
    expect(sides).toHaveLength(7)
    expect(sides[0]).toBe('left')
    expect(sides[1]).toBe('right')
    expect(sides[2]).toBe('left')
    expect(sides[3]).toBe('right')
  })

  it('renders picsum placeholder images for every entry', () => {
    const { container } = render(<BlogFeed />)
    const images = Array.from(container.querySelectorAll('article img'))
    expect(images).toHaveLength(7)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/inkwell-1/900/600')
    expect(images[6]).toHaveAttribute('src', 'https://picsum.photos/seed/inkwell-7/900/600')
  })
})
