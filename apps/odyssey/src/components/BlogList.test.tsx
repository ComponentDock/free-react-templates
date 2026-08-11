import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogList } from './BlogList'
import { blogPosts } from '../data'

describe('BlogList', () => {
  it('renders the five blog posts with title, excerpt, continue Reading link, and meta', () => {
    render(<BlogList />)
    const section = screen.getByRole('region', { name: 'Blog posts' })
    expect(section).toBeInTheDocument()
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'continue Reading' })).toHaveLength(blogPosts.length)
    expect(screen.getAllByText('Marvel Maison')).toHaveLength(blogPosts.length)
    expect(screen.getAllByText('13th Oct, 2018')).toHaveLength(blogPosts.length)
  })

  it('renders the pagination controls with Previous, page numbers, and Next', () => {
    render(<BlogList />)
    const pagination = screen.getByRole('navigation', { name: 'Blog pagination' })
    expect(pagination).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Previous' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Page 01' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Page 02' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Page 09' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Next' })).toBeInTheDocument()
  })
})
