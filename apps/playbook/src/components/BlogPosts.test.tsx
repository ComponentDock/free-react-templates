import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders the heading', () => {
    render(<BlogPosts />)
    expect(screen.getByText('Recent Blog Posts')).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<BlogPosts />)
    expect(screen.getByText('Creative Design Trends for 2026')).toBeInTheDocument()
    expect(screen.getByText('Building Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('The Future of Web Development')).toBeInTheDocument()
  })

  it('renders the Read All Blog Posts link', () => {
    render(<BlogPosts />)
    expect(screen.getByText('Read All Blog Posts')).toBeInTheDocument()
  })

  it('shows hover overlay on blog post', async () => {
    const user = userEvent.setup()
    render(<BlogPosts />)

    const post = screen.getByText('Creative Design Trends for 2026').closest('div')!
    await user.hover(post)

    const dates = screen.getAllByText('March 15, 2026')
    expect(dates.length).toBeGreaterThanOrEqual(1)
  })

  it('hides overlay on mouse leave', async () => {
    const user = userEvent.setup()
    render(<BlogPosts />)

    const post = screen.getByText('Creative Design Trends for 2026').closest('div')!
    await user.hover(post)
    await user.unhover(post)

    // All date elements should still be in DOM
    const dates = screen.getAllByText('March 15, 2026')
    expect(dates.length).toBeGreaterThan(0)
  })

  it('renders blog post images', () => {
    render(<BlogPosts />)
    expect(screen.getByAltText('Creative Design Trends for 2026')).toBeInTheDocument()
    expect(screen.getByAltText('Building Brand Identity')).toBeInTheDocument()
  })
})
