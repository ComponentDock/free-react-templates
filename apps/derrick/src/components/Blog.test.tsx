import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    const dates = screen.getAllByText('June 29, 2024')
    expect(dates).toHaveLength(3)
  })

  it('renders "Read more" links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read more')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders comment counts', () => {
    render(<Blog />)
    const comments = screen.getAllByText('3')
    expect(comments.length).toBeGreaterThanOrEqual(3)
  })

  it('has the blog section id', () => {
    render(<Blog />)
    expect(document.getElementById('blog')).toBeInTheDocument()
  })
})
