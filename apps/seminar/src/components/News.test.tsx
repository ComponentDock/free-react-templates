import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders the section heading', () => {
    render(<News />)
    expect(screen.getByRole('heading', { level: 2, name: 'News' })).toBeInTheDocument()
  })

  it('renders 3 blog post cards', () => {
    render(<News />)
    const articles = screen.getAllByRole('article')
    expect(articles.length).toBe(3)
  })

  it('renders author info', () => {
    render(<News />)
    const authors = screen.getAllByText(/Emely Peters/)
    expect(authors.length).toBe(3)
    const dates = screen.getAllByText(/Sep. 10, 2024/)
    expect(dates.length).toBe(3)
  })

  it('renders the More Blog Posts CTA', () => {
    render(<News />)
    expect(screen.getByRole('link', { name: 'More Blog Posts' })).toBeInTheDocument()
  })

  it('has the news section id', () => {
    const { container } = render(<News />)
    expect(container.querySelector('#news')).toBeInTheDocument()
  })
})
