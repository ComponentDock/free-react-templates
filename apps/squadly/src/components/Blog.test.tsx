import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading and 3 blog posts', () => {
    render(<Blog />)

    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Blog Updates' })).toBeInTheDocument()

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('renders Read more buttons for each post', () => {
    render(<Blog />)

    const readMoreButtons = screen.getAllByRole('link', { name: 'Read more' })
    expect(readMoreButtons).toHaveLength(3)
  })
})
