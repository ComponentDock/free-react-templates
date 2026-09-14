import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Blog Posts')
  })

  it('renders 3 blog post cards', () => {
    render(<Blog />)
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('renders post titles and dates', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /small river named Duden/ })).toBeInTheDocument()
    expect(screen.getByText('April 25, 2019')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#blog')
    }
  })
})
